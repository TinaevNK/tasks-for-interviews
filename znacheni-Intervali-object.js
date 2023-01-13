const findSumAndCount = (range, intervals) => {
  const result = [];

  let sum = 0;
  let count = 0;

  for (const [start, end] of intervals) {
    if (end < range[0] || start > range[range.length - 1]) {
      result.push({ count, sum });
    } else {
      for (let num of range) {
        if (num >= start && num <= end) {
          count++;
          sum += num;
        }
      }

      result.push({ count, sum });
      count = 0;
      sum = 0;
    }
  }

  return result;
};

console.log(findSumAndCount([2,3,4], [[0,1], [2,5],[6,8]]));
