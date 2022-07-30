import { Component, For } from "solid-js";
import { KEYBOARD_ROWS } from "../constants";

const Keyboard: Component = () => {
  return <div>
    <For each={KEYBOARD_ROWS}>
      {(row, i) => <div class="flex gap-2 justify-center mb-2">
        <For each={row}>
          {(key, i) => <button class="p-2 h-10 rounded-md flex items-center justify-center border-2 border-gray-100">
            {key}
          </button>}
        </For>
      </div>}
    </For>
  </div>
};

export default Keyboard;