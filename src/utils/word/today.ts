import wordBank from "./possible";

const today = new Date();
const YEAR_FACTOR = +import.meta.env.VITE_YEAR;
const MONTH_FACTOR = +import.meta.env.VITE_MONTH;
const DATE_FACTOR = +import.meta.env.VITE_DATE;

export const getTodayWord = () => {
  const rand = today.getFullYear() * YEAR_FACTOR + today.getMonth() * MONTH_FACTOR + today.getDate() * DATE_FACTOR;
  const word = wordBank[rand % wordBank.length];
  if (import.meta.env.DEV) console.log(word);
  return word;
};

export const isDifferentDate = () => {
  const dateString = localStorage.getItem("LAST_OPENED");
  const oldDate = new Date(dateString);
  return oldDate.getDate() !== today.getDate()
    || oldDate.getMonth() !== today.getMonth()
    || oldDate.getFullYear() !== today.getFullYear()
};

export const saveToday = () => {
  localStorage.setItem("LAST_OPENED", today.toUTCString());
}