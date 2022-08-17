const ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const KEYBOARD_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DEL"]
];

[ALPHABET, KEYBOARD_ROWS].forEach(v => Object.freeze(v));

export {
  ALPHABET,
  KEYBOARD_ROWS,
}

export const LETTERS = 5;
export const GUESSES = 6;
export const ANIMATION_DELAY = 200;
export const KEYBOARD_TRANSITION_DELAY = ANIMATION_DELAY * (LETTERS + 1);
