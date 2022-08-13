import { createSignal, Setter } from "solid-js";

const createLocalStorageSignal = <T>(key: string, defaultValue: T) => {
  const initialValue = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key)) as T
    : defaultValue;
  const [value, setValue] = createSignal(initialValue);
  const setValueAndStore = ((arg) => {
    const v = setValue(arg);
    localStorage.setItem(key, JSON.stringify(v));
    return v;
  }) as typeof setValue;

  return [value, setValueAndStore as Setter<T>] as const;
}

export default createLocalStorageSignal;