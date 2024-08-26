const findWhere = (data, where) => {
  const entries = Object.entries(where);
  for (const item of data) {
    let find = true;
    for (const [key, value] of entries) {
      if (item[key] !== value) {
        find = false;
        break;
      }
    }
    if (find) {
      return item;
    }
  }

  return null;
};

export default findWhere;
