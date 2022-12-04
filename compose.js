const compose = (...fns) => (arg) => fns.reduceRight((composed, f) => f(composed), arg);

const one = (one) => console.log(one, "one");
const two = (two) => {
  console.log(two, "two");
  return two + 'yeeees';
};

compose(one, two)('первый пошёл');
