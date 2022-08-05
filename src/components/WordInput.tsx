import { Component, For } from "solid-js";
import { guesses } from "../stores/GameStore";
import LetterInput from "./LetterInput";

const WordInput: Component<{ index: number }> = ({ index }) => {
  return <div class="flex mx-auto space-x-1 mb-1 text-white">
    <For each={guesses()[index]}>
      {(letter, letterIndex) => <LetterInput letter={letter} wordIndex={index} letterIndex={letterIndex()} />}
    </For>
  </div>
};

export default WordInput;