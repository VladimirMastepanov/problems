export default (params) => {
  const keys = Object.keys(params).sort();
  const result = [];

  for (const key of keys) {
    result.push(`${key}=${params[key]}`);
  }

  return result.join('&');
};
