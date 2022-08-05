import { Component, createEffect, For } from 'solid-js';
import Keyboard from './components/Keyboard';
import WordInput from './components/WordInput';
import { GUESSES } from './constants';

const App: Component = () => {
  createEffect(() => {
    window.addEventListener("keydown", (e) => {
      e.preventDefault();
      console.log(e.key);
    });
  });

  return (
    <div class="w-full h-screen bg-black text-white mx-auto max-w-10 py-10 flex flex-col items-center">
      {/* Header */}
      <h1 class="text-4xl mb-2 text-center font-bold">Wordle</h1>
      {/* Content */}
      <div class="flex flex-col gap-y-1 max-w-2xl h-full justify-between items-center">
        {/* Guesses */}
        <div class="grow flex flex-col justify-center">
          <For each={Array(GUESSES)}>
            {(_, i) => <WordInput index={i()} />}
          </For>
        </div>
        {/* Keyboard */}
        <Keyboard />
      </div>
    </div>
  )
}

export default App;
