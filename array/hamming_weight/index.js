const hammingWeight = (num) => {
  let weight = 0;
  const digits = num.toString(2);

  for (let i = 0; i < digits.length; i += 1) {
    if (digits[i] === '1') {
      weight += 1;
    }
  }

  return weight;
};
