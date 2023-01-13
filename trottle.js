function throttle(fn, delay, ctx) {
  let avalible = true;
  let lastArgs = null;
  const call = function (...args) {
    if (avalible) {
      fn.call(ctx, ...args);
      avalible = false;
      setTimeout(() => {
        avalible = true;
        if (lastArgs) {
          call(...lastArgs);
          lastArgs = null;
        }
      }, delay);
    } else {
      lastArgs = args;
    }
  };
  return call;
}
