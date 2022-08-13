import { Component, For, Index } from "solid-js";
import game, { Box } from "../utils/game";

const ANIMATION_DELAY = 0.2;

const LetterInput: Component<{ box: Box, index: number }> = ({ box: { letter, state }, index }) => {
  const className = letter == "" ? "none" :
    state === "CORRECT_SPOT" ? "correct-spot" :
      state === "WRONG_SPOT" ? "wrong-spot" :
        state === "NOT_FOUND" ? "not-found" : "filled";

  const delay = (className === "none" || className === "filled") ? 0 : ANIMATION_DELAY * index;

  return (
    <div
      style={{
        "animation-delay": `${delay}s`
      }}
      class={`w-16 h-16 border-2 ${className} flex items-center justify-center`}
    >
      <span class="text-4xl font-bold">{letter}</span>
    </div>
  )
};

const Wordle = () => {
  const { wordIndex, invalid } = game;
  return <Index each={game.words()}>
    {(words, row) => (
      <div
        class={`flex mx-auto space-x-2 mb-2 text-white`}
        classList={{
          invalid: invalid() && wordIndex() === row,
          current: wordIndex() === row
        }}
      >
        <For each={words()}>
          {(box, col) => (
            <LetterInput box={box} index={col()} />
          )}
        </For>
      </div>
    )}
  </Index>
}

export default Wordle;