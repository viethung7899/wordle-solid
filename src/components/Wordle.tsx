import { Component, For } from "solid-js";
import game, { Box } from "../utils/game";

const LetterInput: Component<{ box: Box }> = ({ box: { letter, state } }) => {
  let style = "bg-transparent border-2 border-gray-500";
  if (state === "CORRECT_SPOT") style = "bg-green-600";
  if (state === "WRONG_SPOT") style = "bg-yellow-600";
  if (state === "NOT_FOUND") style = "bg-gray-700"

  return (
    <div class={`w-16 h-16 ${style} flex items-center justify-center`}>
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