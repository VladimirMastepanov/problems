const fromPairs = (data) => {
  const result = {};

  for (const [key, value] of data) {
    result[key] = value;
  }

  return result;
};

export default fromPairs;
