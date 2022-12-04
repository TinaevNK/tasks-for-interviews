// const compose = (...fns) => (arg) => fns.reduceRight((composed, f) => f(composed), arg);

const compose = (...fns) => (x) => fns.reduceRight((acc,fn)=>fn(acc), x);

const one = (one) => console.log(one, "one");
const two = (two) => {
  console.log(two, "two");
  return two + 'yeeees';
};

// const compose = function(args) {
//   let funcs = Array.prototype.slice.call(args);

//   return funcs.reduce(function(f,g) {
//     return function() {
//       return f(g.apply(this, args));
//     };
//   });
// };

compose(one, two)('первый пошёл');
