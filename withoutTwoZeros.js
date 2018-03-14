/**
 * Created by Makeev Evgeny on 12.03.18.
 */
const compare = (arr1, arr2) => {
  if (!arr1 || !arr2 || arr1.length !== arr2.length) return false;
  return !(arr1.join('') - arr2.join(''));
};

const isNumNear = (num, arr) =>
  arr.every((elem, ind) =>
    !(elem === num && elem === arr[ind + 1]));

const makeCombinations = (num, arr) => {
  const allComb = arr.reduce((acc, el, ind) =>
    [...acc, arr.slice(0, ind).concat(num, arr.slice(ind))], [arr.concat(num)]);
  return allComb.reduce((accum, elem) => // eslint-disable-line
    isNumNear(num, elem) ? [...accum, elem] : accum, []);
};

const delEqualArrElements = (arr) => {
  const fnForFilter = (elemToFind, ind) =>
    !arr.slice(ind).find((el, indF, arrF) =>
      compare(elemToFind, arrF[indF + 1]));
  return arr.filter(fnForFilter);
};

const withoutTwoZeros = (zero, one) => {
  const arrZero = new Array(zero).fill(0);
  const arrOne = new Array(one).fill(1);
  const workNum = 0;

  const iter = (newArrZero, newAcc) => {
    if (newArrZero.length === 0) return newAcc;
    const tempAcc = newAcc.reduce((acc, elemArr) =>
      [...acc, ...makeCombinations(workNum, elemArr)], []);
    return iter(newArrZero.slice(1), delEqualArrElements(tempAcc));
  };

  const allCombinations = iter(arrZero, [arrOne]);
  console.log(allCombinations);
  return allCombinations.length;
};

console.log(withoutTwoZeros(1, 8));
