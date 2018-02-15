/**
 * Created by Makeev Evgeny on 11.02.18.
 */
const convertArrToObj = (arr) => {
  const fn = (acc, elem) => {
    const [key, child] = elem;
    if (key instanceof Array) return convertArrToObj(elem);
    if (child instanceof Array) return { ...acc, [key]: fn({}, child) };
    return { ...acc, [key]: child };
  };
  return arr.reduce(fn, {});
};
// HOW TO USE
const check = [
  ['key', [['key2', 'anotherValue'], ['key6', 236]]],
  ['key2', 'value2'],
];
console.log(convertArrToObj(check));
