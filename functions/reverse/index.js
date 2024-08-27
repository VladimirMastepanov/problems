const reverse = (str) => {
  if (str.length === 0) {
    return str;
  }

  return `${str.slice(-1)}${reverse(str.slice(0, -1))}`;
};

// Альтернативный вариант с использованием тернарного оператора
// const reverse = (str) => (
//   str.length === 0
//     ? str
//     : `${str.slice(-1)}${reverse(str.slice(0, -1))}`
// );

export default reverse;
