const once = (fn) => {
  let called = false;

  return (...args) => {
    if (called) return;
    called = true;
    fn(...args);
  };
};

// BEGIN (write your solution here)
const filter = (collection, fn, callback = noop) => {
  const onceCalback = once(callback);
  if (!collection.length) return callback(null, []);

  let count = 0;
  const result = [];

  function cb(data, err) {
    result[this] = !err ? undefined : collection[this];
    count += 1;
    if (count === collection.length) {
      onceCalback(null, result.filter(x => x));
    }
  }
  return collection.forEach((el, ind) =>
    fn(el, cb.bind(ind))); // здесь мы привязываем ind в кач this к фн cb
};
// END
export default filter;
