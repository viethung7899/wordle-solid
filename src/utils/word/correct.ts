import wordBank from "./possible";

const getCorrectWord = (date: Date) => {
  const rand = date.getFullYear() * 15667 + date.getMonth() * 70843 + date.getDate() * 15667;
  const word = wordBank[rand % wordBank.length];
  console.log(word);
  return word;
};

export default getCorrectWord;