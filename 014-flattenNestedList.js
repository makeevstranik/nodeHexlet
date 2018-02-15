/**
 * Created by Makeev Evgeny on 11.02.18.
 */
const flatten = arr => arr.reduce((acc, elem) =>
  elem instanceof Array ? [...acc, ...flatten(elem)] : [...acc, elem], []);
export default flatten;

/*
// HOW TO USE
const listToCheck = [1, 2, [3, 5], [[4, 3], 2]];
console.log(flatten(listToCheck));
*/
