// 1^2 + 2^2 - 3^2 - 4^2 + 5^2....2022^2

let res = 0;
let stage = true;

for (let i = 1; i <= 2022; i++) {
  if (i%2 && stage) {
    res += i**2;
  } else {
    stage ? res += i**2 : res -= i**2;
  }
  if (!(i%2)) stage = !stage;
};

console.log(res);
