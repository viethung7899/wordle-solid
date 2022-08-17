import { Component, onMount, Show } from 'solid-js';
import Alert from './components/Alert';
import Keyboard from './components/Keyboard';
import NewPlayer from './components/NewPlayer';
import Overlay from './components/Overlay';
import Wordle from './components/Wordle';
import game, { isNewPlayer } from './utils/game';
import { isDifferentDate, saveToday } from './utils/word/today';

const App: Component = () => {
  const {gameClear, addLetter, removeLetter, submitWord } = game;

  onMount(() => {
    if (isDifferentDate()) {
      game.reset();
    }
    saveToday();
  })

  onMount(() => {
    window.addEventListener("keydown", (e) => {
      if (gameClear.row() >= 0 || isNewPlayer()) return;
      e.preventDefault();
      if (isNewPlayer()) return;
      if (/[a-zA-Z]/g.test(e.key) && e.key.length === 1) addLetter(e.key);
      if (e.key === "Backspace") removeLetter();
      if (e.key === "Enter") submitWord();
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
