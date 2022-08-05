import { Component, For } from "solid-js";
import game, { Box, getColorFromState } from "../utils/game";

const LetterInput: Component<{ box: Box }> = ({ box: { letter, state } }) => {
  return (
    <div class={`w-14 h-14 border-2 border-gray-600 ${getColorFromState(state)} flex items-center justify-center`}>
      <span class="text-4xl font-bold">{letter}</span>
    </div>
  )
};

const Wordle = () => {
  return <For each={game.words()}>
    {(word) => (
      <div class="flex mx-auto space-x-1 mb-1 text-white">
        <For each={word}>
          {(box) => (
            <LetterInput box={box} />
          )}
        </For>
      </div>
    )}
  </For>
}

export default Wordle;