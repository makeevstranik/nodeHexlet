/**
 * Created by Makeev Evgeny on 15.02.18.
 */
const _ = require('lodash');

const quickSort = (arr) => {
  const pivot = arr[0];
  if (arr.length < 2) return arr;
  if (arr.length === 2) return pivot <= arr[1] ? arr : [arr[1], pivot];
  const middle = arr.filter(elem => elem === pivot);
  if (middle.length === arr.length) return arr;
  const left = arr.filter(elem => elem < pivot);
  const right = arr.filter(elem => elem > pivot);
  return [...quickSort(left), ...quickSort(middle), ...quickSort(right)];
};

// HOW TO USE

const disorderArr = _.range(1, 20).map(elem => _.random(0, 99));
console.log(disorderArr);
console.log(quickSort(disorderArr));

