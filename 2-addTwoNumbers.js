const zamikaine = (count) => {
  return () => {
    if (count > 0) {
        count--;
      return "yes";
    }
    return "no";
  };
};

const res = zamikaine(3)

res()
res()


console.log(res())


