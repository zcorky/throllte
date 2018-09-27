export interface Fn {
  (...args: any[]): any
}
export interface Throttle {
  (fn: Fn, wait: number): Fn
}

/**
 * Returns a new function that, when invoked, invokes `fn` at most once per `wait` milliseconds.
 *
 * @see https://github.com/component/throttle/blob/master/index.js
 * @see https://github.com/mqyqingfeng/Blog/issues/26
 *
 * @param {Function} function to wrap
 * @param {Number} wait Number of milliseconds that must elapse between `fn` invocations.
 * @return {Function} function that wraps the `fn` function passed in.
 */
export const throttled: Throttle = (fn, wait) => {
  let ctx, args, timeout, result;
  let last = 0;

  function call() {
    last = +new Date();
    result = fn.apply(ctx, args);
    timeout = null;
  }

  return function throttled() {
    ctx = this;
    args = arguments;
    const delta = +new Date() - last;
    if (!timeout) {
      if (delta >= wait) call();
      else timeout = setTimeout(call, wait - delta);
    }
    return result;
  }
};

export default throttled;
