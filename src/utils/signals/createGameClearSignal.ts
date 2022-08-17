import { createSignal } from "solid-js";
import { KEYBOARD_TRANSITION_DELAY } from "../constants";
import createLocalStorageSignal from "./createLocalStorageSignal";

const createGameClearSignal = () => {
  const [row, setRow] = createLocalStorageSignal("CLEAR", -1);
  const [animating, setAnimating] = createSignal(false);

  const clearRow = (row: number) => {
    setRow(row);
    setTimeout(() => setAnimating(true), KEYBOARD_TRANSITION_DELAY);
  };

  return {row, animating, clearRow}
};

export default createGameClearSignal;