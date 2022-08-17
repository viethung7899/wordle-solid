import { createRoot, createSignal } from "solid-js";
import { displayAlert } from "../components/Alert";
import createGameClearSignal from "./signals/createGameClearSignal";
import createLocalStorageSignal from "./signals/createLocalStorageSignal";
import getCorrectWord from "./word/correct";
import wordBank from "./word/possible";

export const LETTERS = 5;
export const WORDS = 6;

type _State = "NOT_FOUND" | "WRONG_SPOT" | "CORRECT_SPOT";
export type State = "UNAVAILABLE" | _State;

export const getCharCode = (letter: string) => {
  return letter.toLowerCase().charCodeAt(0) - "a".charCodeAt(0);
};

export type Box = {
  letter: string
  state: State
}

const emptyBox = (): Box => ({
  letter: "",
  state: "UNAVAILABLE"
});

const correctWord = getCorrectWord(new Date());

const generateWords = () => {
  return Array(WORDS).fill(0).map(_ => {
    return Array(LETTERS).fill(0).map(_ => emptyBox());
  })
};

const generateLetterStates = () => {
  return Array(26).fill(0).map<State>(_ => "UNAVAILABLE");
}

const generateAnswer = (word: string, correctWord: string) => {
  // Match the correct spot
  let result = word.toLowerCase().split("").map<_State>(_ => "NOT_FOUND");
  let map = Array(26).fill(0);

  // Match the character with correct spot
  for (let i = 0; i < correctWord.length; i++) {
    const correctLetter = correctWord[i];
    if (word[i] === correctLetter) result[i] = "CORRECT_SPOT";
    else map[getCharCode(correctLetter)]++;
  };

  // Match the wrong spot
  for (let i = 0; i < result.length; i++) {
    if (result[i] === "CORRECT_SPOT") continue;
    if (map[getCharCode(word[i])] > 0) {
      result[i] = "WRONG_SPOT";
      map[getCharCode(word[i])]--;
    }
  }

  return result;
}

const [isNewPlayer, setNewPlayer] = createLocalStorageSignal("NEW_PLAYER", true);
export { isNewPlayer, setNewPlayer };

const createGame = () => {
  const [words, setWords] = createSignal(generateWords());
  const [wordIndex, setWordIndex] = createSignal(0);
  const [letterIndex, setLetterIndex] = createSignal(0);
  const [letterStates, setLettersStates] = createSignal(generateLetterStates());
  const [invalid, setInvalid] = createSignal(false);
  const gameClear = createGameClearSignal();
 
  const setInvalidAndReset = () => {
    clearTimeout();
    setInvalid(true);
    setTimeout(() => {
      setInvalid(false);
    }, 600);
  }

  const addLetter = (letter: string) => {
    const $wordIndex = wordIndex();
    const $words = words();
    if ($wordIndex < 0 || $wordIndex >= $words.length) return;
    const $letterIndex = letterIndex();
    if ($letterIndex < 0 || $letterIndex >= $words[$wordIndex].length) return;
    letter = letter.toUpperCase();

    // Add a letter
    setWords((words) => {
      return words.map((word, row) => {
        return word.map((box, col) => {
          if (row != $wordIndex || col != $letterIndex) return box;
          return { letter, state: "UNAVAILABLE" } as Box
        })
      })
    });
    setLetterIndex($letterIndex + 1);
  };

  const removeLetter = () => {
    const $wordIndex = wordIndex();
    const $words = words();
    if ($wordIndex < 0 || $wordIndex >= $words.length) return;
    const $letterIndex = letterIndex() - 1;
    if ($letterIndex < 0 || $letterIndex >= $words[$wordIndex].length) return;

    // Remove letter
    setWords((words) => {
      return words.map((word, row) => {
        return word.map((box, col) => {
          if (row != $wordIndex || col != $letterIndex) return box;
          return { letter: "", state: "UNAVAILABLE" } as Box
        })
      })
    });
    setLetterIndex($letterIndex);
  };

  const submitWord = () => {
    const $wordIndex = wordIndex();
    const $words = words();
    if ($wordIndex < 0 || $wordIndex >= $words.length) return;
    const $letterIndex = letterIndex();

    // Not enough letters
    if ($letterIndex < $words[$wordIndex].length) {
      displayAlert("Not enough letters", 2000);
      setInvalidAndReset();
      return;
    }

    // Pull out the word
    const $word = $words[$wordIndex].map(b => b.letter.toLowerCase()).join("");

    // Not in world list
    if (wordBank.findIndex(w => w === $word) < 0) {
      displayAlert("Not in word list", 2000);
      setInvalidAndReset();;
      return;
    }

    // Generate answer
    const response = generateAnswer($word, correctWord);

    // Update boxes
    setWords((words) => words.map((word, row) => {
      if (row !== $wordIndex) return word;
      return word.map((box, index) => ({
        ...box,
        state: response[index]
      }))
    }));


    // Update letter states
    setLettersStates((prev) => {
      let states = [...prev];
      for (let i = 0; i < $word.length; i++) {
        const code = getCharCode($word[i]);
        const oldState = states[code];
        const newState = response[i];
        if (oldState === "UNAVAILABLE") states[code] = newState;
        else if (oldState === "NOT_FOUND" || oldState === "CORRECT_SPOT") continue;
        else if (newState === "CORRECT_SPOT") states[code] = "CORRECT_SPOT";
      }
      return states;
    });

    // Check if game clear
    if (response.every((state) => state === "CORRECT_SPOT")) {
      displayAlert("Great!");
      gameClear.clearRow($wordIndex);
    }

    // Update the indices
    setLetterIndex(0);
    setWordIndex($wordIndex + 1);

    // Check game over
    if ($wordIndex + 1 >= WORDS) {
      displayAlert(correctWord.toUpperCase());
    }
  };

  return {
    words,
    wordIndex,
    addLetter,
    removeLetter,
    submitWord,
    letterStates,
    invalid,
    gameClear
  }
}

const game = createRoot(createGame);

export default game;

