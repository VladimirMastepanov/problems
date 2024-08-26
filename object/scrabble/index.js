import _ from 'lodash';

// Эту функцию можно заменить функцией countBy
// из библиотеки lodash https://lodash.com/docs/#countBy
const countByChars = (str) => {
  const chars = {};

  for (const char of str) {
    const count = _.get(chars, char, 0);
    chars[char] = count + 1;
  }

  return chars;
};

export default (str, word) => {
  const countsChars = countByChars(str);

  for (const char of word.toLowerCase()) {
    const count = _.get(countsChars, char, 0);
    if (count === 0) {
      return false;
    }
    countsChars[char] -= 1;
  }

  return true;
};
