const fib = (num) => {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }

  let first = 0;
  let second = 1;
  let result = first + second;

  for (let i = 2; i <= num; i += 1) {
    result = first + second;
    first = second;
    second = result;
  }

  return result;
};

export default fib;
