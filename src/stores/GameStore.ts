import { createSignal } from "solid-js";
import { GUESSES, LETTERS } from "../constants";

const emptyGuesses = () => {
  let guesses: Array<Array<string>> = [];
  for (let i = 0; i < GUESSES; i++) {
    guesses.push(Array(LETTERS).fill(""));
  }
  return guesses;
}

const [guesses, setGuesses] = createSignal(emptyGuesses());
const [wordIndex, setWorldIndex] = createSignal(0);
const [letterIndex, setLetterIndex] = createSignal(0);

export const addLetter = (newLetter: string) => {
const [wi, li] = [wordIndex, letterIndex].map(v => v());
if (li >= LETTERS || wi >= GUESSES) return;
setGuesses((guesses) => guesses.map(
  (guess, i) => guess.map((letter, j) => (i == wi && j == li) ? newLetter.toUpperCase() : letter))
  );
  setLetterIndex((index) => index + 1);
};

export const removeLetter = () => {
  const [wi, li] = [wordIndex, letterIndex].map(v => v());
  if (li <= 0) return;
  setGuesses(guesses => guesses.map(
    (guess, row) => guess.map((letter, col) => (row == wi && col == li - 1) ? "" : letter)
  ));
  setLetterIndex((index) => index - 1);
};

export const submitGuess = () => {
  const [wi, li] = [wordIndex, letterIndex].map(v => v());
  if (li < LETTERS || wi >= GUESSES) return;
  setWorldIndex(index => index + 1);
}

export {guesses, wordIndex, letterIndex}