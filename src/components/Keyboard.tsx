import { Component, For } from "solid-js";
import { KEYBOARD_ROWS } from "../utils/constants";
import game, { getCharCode } from "../utils/game";

const Keyboard: Component = () => {
  const { addLetter, removeLetter, submitWord, letterStates } = game;

  const handleClick = (key: string) => {
    if (key === "ENTER") return submitWord;
    else if (key === "DEL") return removeLetter;
    else return () => addLetter(key);
  };

  const style = (key: string) => {
    if (key === "ENTER" || key === "DEL") return "bg-gray-500";
    const state = letterStates()[getCharCode(key)];
    if (state === "UNVAILABLE") return "bg-gray-500";
    if (state === "CORRECT_SPOT") return "bg-green-600";
    if (state === "WRONG_SPOT") return "bg-yellow-600";
    return "bg-gray-700";
  }


  return <div>
    <For each={KEYBOARD_ROWS}>
      {(row, i) => <div class="flex gap-2 justify-center mb-2">
        <For each={row}>
          {(key, i) => (
            <button
              class={`px-3 min-w-[2.5rem] py-4 rounded-md flex items-center justify-center ${style(key)} focus:outline-none`}
              onClick={handleClick(key)}>
              <strong>{key}</strong>
            </button>
          )}
        </For>
      </div>}
    </For>
  </div>
};

export default Keyboard;