import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <>
    <div class="w-full h-screen bg-black text-white mx-auto max-w-10 py-10 flex flex-col items-center">
      {/* Header */}
      <h1 class="text-4xl mb-2 text-center font-bold">Wordle</h1>
      {/* Content */}
      <div class="flex flex-col gap-y-1 max-w-2xl h-full justify-between items-center">
        <div class="grow">
          
        </div>
      </div>
    </div>
    </>
  );
};

export default App;
