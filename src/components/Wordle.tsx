import { Component, For } from "solid-js";
import game, { LETTERS, WORDS } from "../utils/game";

const ANIMATION_DELAY = 0.2;

const LetterInput: Component<{ row: number, col: number }> = ({ row, col }) => {
  const letter = () => game.words()[row][col].letter;
  const className = () => {
    if (letter() === "") return "none";
    const $state = game.words()[row][col].state;
    if ($state === "CORRECT_SPOT") return "correct-spot";
    if ($state === "WRONG_SPOT") return "wrong-spot";
    if ($state === "NOT_FOUND") return "not-found";
    return "filled";
  };
  const current = () => {
    const $wordIndex = game.wordIndex();
    if ($wordIndex === row) return "current";
    return "";
  }

  const delay = () => {
    const $class = className();
    if ($class === "none" || $class === "filled") return 0;
    else return col * ANIMATION_DELAY;
  }

  return (
    <div
      style={{
        "animation-delay": `${delay()}s`
      }}
      class={`w-16 h-16 border-2 ${className()} ${current()} flex items-center justify-center`}
    >
      <span class="text-4xl font-bold">{letter()}</span>
    </div>
  )
};

const Wordle = () => {

  return <For each={Array(WORDS).fill(0)}>
    {(_, row) => (
      <div class={`flex mx-auto space-x-1 mb-1 text-white`}>
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