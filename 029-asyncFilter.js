/**
 * Created by Makeev Evgeny on 27.03.18.
 */
const asyncFilter = (arr, fn, callback) => {
  if (arr.length === 0) {
    callback([]);
    return;
  }
  const iter = ([head, ...rest], acc) => {
    const newAcc = fn(head) ? [...acc, head] : acc;
    if (rest.length === 0) {
      callback(newAcc);
      return;
    }
    setTimeout(iter, 10, rest, newAcc);
  };
  iter(arr, []);
};

const asyncFilter2 = (arr, fn, callback) => {
  if (arr.length === 0) {
    callback(arr);
    return;
  }
  function* gen(seq) {
    for (let elem of seq) {
      yield fn(elem);
    }
  }
  let acc = [];
  let generator = gen(arr);
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      if (generator.next().value) acc.push(arr[i]);
      if (i === arr.length -1) callback(acc);
    }, 10);
  }
};