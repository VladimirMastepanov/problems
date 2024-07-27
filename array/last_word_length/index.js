export default (str) => {
  const words = str.trim().split(' ');
  const lastWord = words.at(-1);
  return lastWord.length;
};
