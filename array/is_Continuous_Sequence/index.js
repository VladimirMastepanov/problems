const isContinuousSequence = (coll) => {
  const size = coll.length;
  if (size <= 1) {
    return false;
  }

  const start = coll[0];
  for (let index = 1; index < size; index += 1) {
    if (start + index !== coll[index]) {
      return false;
    }
  }

  return true;
};
