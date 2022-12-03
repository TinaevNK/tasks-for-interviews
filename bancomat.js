const limit = { 5000: 0, 1000: 6, 500: 3, 100: 2, 50: 6 };
const cash = 1500;

const bancomat = (cash, limit) => {
  const limitsArr = Object.keys(limit).sort((a, b) => b - a);
  const result = [];
  const minNominal = limitsArr.at(-1);
  let ostatok = cash;

  if (cash % minNominal) return "Error: sum not correct";

  for (const nominal of limitsArr) {
    const q = Math.floor(ostatok / nominal);

    if (q < limit[nominal]) {
      result.push({ q, nominal });
      ostatok -= q * nominal;
    } else {
      result.push({ q: limit[nominal], nominal });
      ostatok -= limit[nominal] * nominal;
    }
  }

  if (ostatok) return "Error: not Enough money";

  const res = result.reduce((str, { q, nominal }) => {
    if (q) {
      if (str) {
        str += ", ";
      }

      str += `${q}x${nominal}`;
      limit[nominal] -= q;
    }

    return str;
  }, "");

  return res;
};

console.log(bancomat(cash, limit));
