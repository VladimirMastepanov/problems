const invertCase = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const isUpper = str[i] === str[i].toUpperCase();
    result += isUpper ? str[i].toLowerCase() : str[i].toUpperCase();
  }

  return result;
};
