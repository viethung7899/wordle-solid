import { Component, createMemo, For } from "solid-js";
import game, { Box, WORDS, LETTERS } from "../utils/game";

const AMIMATION_DELAY = 0.2;

const LetterInput: Component<{row: number, col: number}> = ({ row, col }) => {
  const letter = () => game.words()[row][col].letter;
  const state = () => game.words()[row][col].state;
  const style = () => {
    const $state = state();
    if ($state === "CORRECT_SPOT") return "correct-spot";
    if ($state === "WRONG_SPOT") return "wrong-spot";
    if ($state === "NOT_FOUND") return "not-found";
    return "none";
  };

  return (
    <div
      style={{
        "animation-delay": `${col * AMIMATION_DELAY}s`
      }} 
      class={`w-16 h-16 ${style()} flex items-center justify-center`}
      >
      <span class="text-4xl font-bold">{letter()}</span>
    </div>
  )
};

const Wordle = () => {
  return <For each={Array(WORDS).fill(0)}>
    {(_, row) => (
      <div class="flex mx-auto space-x-1 mb-1 text-white">
        <For each={Array(LETTERS).fill(0)}>
          {(_, col) => (
            <LetterInput row={row()} col={col()} />
          )}
        </For>
      </div>
    )}
  </For>
}

export default Wordle;