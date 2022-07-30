const GAME_STATES = {
  NEW_PLAYER: "NEW_PLAYER",
  PLAYING: "PLAYING",
  WIN: "WIN",
  LOSE: "LOSE"
}

const LETTER_STATES = {
  NOT_FOUND: "NOT_FOUND",
  CORRECT_SPOT: "CORRECT_SPOT",
  WRONG_SPOT: "WRONG_SPOT",
  AVAILABLE: "AVAILABLE"
};

const LETTER_STATES_BG = {
  [LETTER_STATES.NOT_FOUND]: "bg-gray-500",
  [LETTER_STATES.CORRECT_SPOT]: "bg-green-500",
  [LETTER_STATES.WRONG_SPOT]: "bg-yellow-500",
  [LETTER_STATES.AVAILABLE]: "bg-transparent"
};

const ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const KEYBOARD_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DEL"]
];

[GAME_STATES, LETTER_STATES, LETTER_STATES_BG, ALPHABET, KEYBOARD_ROWS].forEach(v => Object.freeze(v));

const LETTERS = 5;
const GUESSES = 6;

export {
  GAME_STATES,
  LETTER_STATES,
  LETTER_STATES_BG,
  ALPHABET,
  KEYBOARD_ROWS,
  LETTERS,
  GUESSES
}