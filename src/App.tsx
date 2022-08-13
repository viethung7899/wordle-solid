import { Component, onMount, Show } from 'solid-js';
import Alert from './components/Alert';
import Keyboard from './components/Keyboard';
import NewPlayer from './components/NewPlayer';
import Overlay from './components/Overlay';
import Wordle from './components/Wordle';
import game, { isNewPlayer } from './utils/game';

const App: Component = () => {
  onMount(() => {
    window.addEventListener("keydown", (e) => {
      e.preventDefault();
      if (isNewPlayer()) return;
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
    <>
      <Show when={isNewPlayer()}>
        <Overlay>
          <NewPlayer />
        </Overlay>
      </Show>
      <div class="w-full h-screen bg-black text-white mx-auto max-w-10 py-2 flex flex-col items-center">
        <div class="text-4xl py-2 text-center font-bold border-b-2 border-gray-500 w-full">Wordle</div>
        <div class="flex flex-col gap-y-1 max-w-2xl h-full justify-between items-center">
        <Alert />
          <div class="grow flex flex-col justify-center">
            <Wordle />
          </div>
          <Keyboard />
        </div>
      </div>
    </>
  )
}

export default App;
