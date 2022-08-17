import { Component } from "solid-js";
import { Box } from "../utils/game";
import { ANIMATION_DELAY } from "./Wordle";

export const LetterInput: Component<{ box: Box; index: number; }> = ({ box: { letter, state }, index }) => {
  if (letter == "")
    return <div class="w-16 h-16 border-2 none"></div>
  if (state == "UNAVAILABLE")
    return <div class="w-16 h-16 border-2 filled flex items-center justify-center">
      <span class="text-4xl font-bold">{letter}</span>
    </div>

  const className = state === "CORRECT_SPOT" ? "correct-spot" :
    state === "WRONG_SPOT" ? "wrong-spot" : "not-found";

  return (
    <div
      style={{
        "animation-delay": `${ANIMATION_DELAY * index}s`
      }}
      class={`w-16 h-16 border-2 ${className} flex items-center justify-center`}
    >
      <span class="text-4xl font-bold">{letter}</span>
    </div>
  );
};
