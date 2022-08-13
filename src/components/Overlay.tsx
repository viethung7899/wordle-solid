import type { Component, JSXElement } from "solid-js";
import { setNewPlayer } from "../utils/game";

const Overlay: Component<{ children: JSXElement }> = (props) => {
  return <div
    class="w-screen h-screen top-0 left-0 fixed text-white flex justify-center items-center opacity-95">
    <div class="bg-gray-900 text-white rounded-md px-8 py-10 relative max-w-lg">
      <button
        class="absolute top-2 right-3 text-4xl text-gray-300 hover:text-white"
        onClick={() => setNewPlayer(false)}>
        &times;
      </button>
      {props.children}
    </div>
  </div>
};

export default Overlay;
