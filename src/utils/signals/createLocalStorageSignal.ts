import { createSignal, Setter } from "solid-js";

const createLocalStorageSignal = <T>(key: string, defaultValue: T) => {
  const initialValue = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key)) as T
    : defaultValue;
  const [value, setValue] = createSignal(initialValue);
  
  const setValueAndStore = (persist: boolean = true) => (arg) => {
    const v = setValue(arg);
    if (persist) localStorage.setItem(key, JSON.stringify(v));
    return v;
  };

  return [
    value, 
    setValueAndStore() as Setter<T>, // Persist value
    setValueAndStore(false) as Setter<T> // Only set value
  ] as const;
}

export default createLocalStorageSignal;