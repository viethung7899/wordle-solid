import wordBank from "./possible";

const today = new Date();

export const getTodayWord = () => {
  const rand = today.getFullYear() * 15667 + today.getMonth() * 70843 + today.getDate() * 15667;
  const word = wordBank[rand % wordBank.length];
  console.log(word);
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