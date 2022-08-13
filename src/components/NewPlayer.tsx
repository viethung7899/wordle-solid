const NewPlayer = () => {
  return <div class="flex flex-col gap-2">
    <p>Guess the <strong>WORDLE</strong> in six tries</p>
    <p>Each gues must be a valid five-letter word. Hit the enter button to submit.</p>
    <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>

    <hr class="my-2 border-gray-100 border-[0.5px]" />

    <strong>Examples</strong>

    <p>The letter <strong>W</strong> is in the word and in the correct spot.</p>
    <div class="flex gap-1 mb-4">
      <div class="w-14 h-14 flex items-center bg-green-600 justify-center" >
        <span class="text-4xl font-bold">W</span>
      </div>
      <div class="w-14 h-14 flex items-center border-gray-600 border-2 justify-center" >
        <span class="text-4xl font-bold">E</span>
      </div>
      <div class="w-14 h-14 flex items-center border-gray-600 border-2 justify-center" >
        <span class="text-4xl font-bold">A</span>
      </div>
      <div class="w-14 h-14 flex items-center border-gray-600 border-2 justify-center" >
        <span class="text-4xl font-bold">R</span>
      </div>
      <div class="w-14 h-14 flex items-center border-gray-600 border-2 justify-center" >
        <span class="text-4xl font-bold">Y</span>
      </div>
    </div>

    <p>The letter <strong>L</strong> is in the word but in the wrong spot.</p>
    <div class="flex gap-1 mb-4">
      <div class="w-14 h-14 flex items-center border-gray-600 border-2 justify-center" >
        <span class="text-4xl font-bold">P</span>
      </div>
      <div class="w-14 h-14 flex items-center bg-yellow-600 justify-center" >
        <span class="text-4xl font-bold">I</span>
      </div>
      <div class="w-14 h-14 flex items-center border-gray-600 border-2 justify-center" >
        <span class="text-4xl font-bold">L</span>
      </div>
      <div class="w-14 h-14 flex items-center border-gray-600 border-2 justify-center" >
        <span class="text-4xl font-bold">L</span>
      </div>
      <div class="w-14 h-14 flex items-center border-gray-600 border-2 justify-center" >
        <span class="text-4xl font-bold">S</span>
      </div>
    </div>

    <p>The letter <strong>U</strong> is not in the word in any spot</p>
    <div class="flex gap-1 mb-4">
      <div class="w-14 h-14 flex items-center border-gray-600 border-2 justify-center" >
        <span class="text-4xl font-bold">V</span>
      </div>
      <div class="w-14 h-14 flex items-center border-gray-600 border-2 justify-center" >
        <span class="text-4xl font-bold">A</span>
      </div>
      <div class="w-14 h-14 flex items-center border-gray-600 border-2 justify-center" >
        <span class="text-4xl font-bold">G</span>
      </div>
      <div class="w-14 h-14 flex items-center bg-gray-600 justify-center" >
        <span class="text-4xl font-bold">U</span>
      </div>
      <div class="w-14 h-14 flex items-center border-gray-600 border-2 justify-center" >
        <span class="text-4xl font-bold">E</span>
      </div>
    </div>
  </div>
};

export default NewPlayer;