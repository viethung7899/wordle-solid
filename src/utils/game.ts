import { createRoot } from "solid-js";
import createLocalStorageSignal from "./createLocalStorageSignal";

const LETTERS = 5;
const WORDS = 6;

export type State = "NOT_FOUND" | "WRONG_SPOT" | "CORRECT_SPOT";

export const getColorFromState = (state?: State) => {
  if (!state) return "bg-transparent"
  if (state === "CORRECT_SPOT") return "bg-green-500";
  if (state === "WRONG_SPOT") return "bg-yellow-500";
  return "bg-gray-500";
}

export type Box = {
  letter: string
  state?: State
}

const emptyBox = () => ({
  letter: ""
} as Box);

const correctWord = "SOLID";

const generateWords = () => {
  return Array(WORDS).fill(0).map(_ => {
    return Array(LETTERS).fill(0).map(_ => emptyBox());
  })
};

const generateAnswer = (word: Box[], correctWord: string) => {
  // Match the correct spot
  let result = word.map<Box>(box => ({ ...box, state: "NOT_FOUND" }));
  // Match the character with incorrect spot
  let map = {}
  for (let i = 0; i < correctWord.length; i++) {
    const correctLetter = correctWord[i];
    if (correctLetter === result[i].letter)
      result[i] = { letter: correctLetter, state: "CORRECT_SPOT" };
    else {
      if (map[correctLetter] === undefined) map[correctLetter] = 0;
      map[correctLetter]++;
    }
  };

  for (let i = 0; i < result.length; i++) {
    if (result[i].state === "CORRECT_SPOT") continue;
    if (!!map[result[i].letter] && map[result[i].letter] > 0) {
      result[i].state = "WRONG_SPOT";
      map[result[i].letter]--;
    }
  }
  return result;
}

const [isNewPlayer, setNewPlayer] = createLocalStorageSignal("NEW_PLAYER", true);
export {isNewPlayer, setNewPlayer}

const createGame = () => {
  const [words, setWords] = createLocalStorageSignal("WORDS", generateWords());
  const [wordIndex, setWordIndex] = createLocalStorageSignal("WORD_INDEX", 0);
  const [letterIndex, setLetterIndex] = createLocalStorageSignal("LETTER_INDEX", 0);

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
          return { letter } as Box
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
          return { letter: "" } as Box
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
    if ($letterIndex < $words[$wordIndex].length) return;
    setWords((words) => {
      return words.map((word, row) => {
        if (row == $wordIndex) return generateAnswer(word, correctWord);
        return word;
      })
    })
    setLetterIndex(0);
    setWordIndex($wordIndex + 1);
  };

  return { words, addLetter, removeLetter, submitWord }
}

const game = createRoot(createGame);

export default game;

