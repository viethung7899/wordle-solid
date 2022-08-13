import { Component, For } from "solid-js";
import { KEYBOARD_ROWS } from "../utils/constants";
import game from "../utils/game";

const Keyboard: Component = () => {
  const {addLetter, removeLetter, submitWord} = game;
  return <div>
    <For each={KEYBOARD_ROWS}>
      {(row, i) => <div class="flex gap-2 justify-center mb-2">
        <For each={row}>
          {(key, i) => (
            <button
              class="py-2 px-5 h-20 rounded-md flex items-center justify-center border-2 border-gray-100"
              onClick={() => {
                if (key === "ENTER") submitWord();
                else if (key === "DEL") removeLetter();
                else addLetter(key);
              }}>
              {key}
            </button>
          )}
        </For>
      </div>}
    </For>
  </div>
};

export default Keyboard;