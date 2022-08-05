import { Component, createEffect } from 'solid-js';
import Keyboard from './components/Keyboard';
import Wordle from './components/Wordle';
import game from './utils/game';

const App: Component = () => {
  createEffect(() => {
    window.addEventListener("keydown", (e) => {
      e.preventDefault();
      console.log(e.key)
      if (/[a-zA-Z]/g.test(e.key) && e.key.length === 1) {
        game.addLetter(e.key);
        return;
      }
      if (e.key === "Backspace") {
        game.removeLetter();
      }
      if (e.key === "Enter") {
        game.submitWord();
      }
    });
  });

  return (
    <div class="w-full h-screen bg-black text-white mx-auto max-w-10 py-10 flex flex-col items-center">
      <h1 class="text-4xl mb-2 text-center font-bold">Wordle</h1>
      <div class="flex flex-col gap-y-1 max-w-2xl h-full justify-between items-center">
        <div class="grow flex flex-col justify-center">
          <Wordle />
        </div>
        <Keyboard />
      </div>
    </div>
  )
}

export default App;
