import { For, Index } from "solid-js";
import game from "../utils/game";
import { LetterInput } from "./LetterInput";

export const ANIMATION_DELAY = 0.2;

const Wordle = () => {
  const { wordIndex, invalid, gameClear } = game;
  return <Index each={game.words()}>
    {(words, row) => (
      <div
        class={`flex mx-auto space-x-2 mb-2 text-white`}
        classList={{
          invalid: invalid() && wordIndex() === row,
          current: wordIndex() === row,
          clear: gameClear.animating() && gameClear.row() === row
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