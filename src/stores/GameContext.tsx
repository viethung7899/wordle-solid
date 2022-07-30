import { Component, createContext, createSignal, JSX, useContext } from "solid-js";
import { GUESSES, LETTERS } from "../constants";

export const emptyGuesses = () => {
  return Array(GUESSES).map(_ => Array(LETTERS).map(__ => ""));
}

interface ContextType {
  guesses: () => string[][];
}

const GameContext = createContext<ContextType>();

export const GameProvider: Component<{ children: JSX.Element }> = ({ children }) => {
  const [guesses, setGuesses] = createSignal(emptyGuesses());
  return <GameContext.Provider value={{ guesses }}>
    {children}
  </GameContext.Provider>
};

export const useGameContext = useContext(GameContext);