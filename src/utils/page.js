export const getTotalCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const getArrayPages = (count) => {
  const res = [];
  for (let i = 1; i <= count; i++) {
    res.push(i);
  }
  return res;
};
