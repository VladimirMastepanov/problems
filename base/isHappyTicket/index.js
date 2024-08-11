export default (num) => {
  let balance = 0;

  for (let i = 0, j = num.length - 1; i < j; i += 1, j -= 1) {
    balance += parseInt(num[i]) - parseInt(num[j]);
  }
  return balance === 0;
};
