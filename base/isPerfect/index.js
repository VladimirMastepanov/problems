const isPerfect = (num) => {
  if (num < 6) {
    return false;
  }

  let sum = 0;
  const upperBorder = num / 2;

  for (let divisor = 1; divisor <= upperBorder; divisor += 1) {
    if (num % divisor === 0) {
      sum += divisor;
    }
  }

  return sum === num;
};
