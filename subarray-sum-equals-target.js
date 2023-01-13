const SubarraySum = (nums, n) => {
  let t = 0;
  let s = -1;
  let e = -1;
  for (let j = 0; j < nums.length; j++) {
    t = 0;
    for (let i = j; i < nums.length; i++) {
      t = t + nums[i];
      if (t == n) {
        s = j;
        e = i;
        break;
      } else if (t > n) {
        break;
      }
    }
    if (s != -1 && e != -1) break;
  }
  return [s, e];
};

console.log(SubarraySum([4, 3, 5, 7, 8], 12));
