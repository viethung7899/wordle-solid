import type { Component } from "solid-js";
import {letterIndex as currentLetterIndex, wordIndex as currentWordIndex} from "../stores/GameStore"

interface Props {
  letter: string;
  wordIndex: number;
  letterIndex: number;
}

const LetterInput: Component<Props> = ({letter, letterIndex, wordIndex}) => {
  if (wordIndex < currentWordIndex())
    return <div class="w-14 h-14 flex items-center justify-center">
      <span class="text-4xl font-bold">{letter}</span>
    </div>
  
  if (letterIndex < currentLetterIndex() && wordIndex === currentLetterIndex())
    return <div class="w-14 h-14 border-2 border-gray-600 flex items-center justify-center">
      <span class="text-4xl font-bold">{letter}</span>
    </div>
  return <span class="w-14 h-14 border-2 border-gray-600">{letter}</span>
};

export default LetterInput;