/**
 * Created by Makeev Evgeny on 26.03.18.
 */
const _ = require('lodash');
const os = require('os');

let date = new Date();

const getAlphRandom1 = size => {
  //const alph = 'abcdefghijklmnopqrstuvwxyz';
  const alph = 'abcd';
  return Array.from({ length: size }, (v, k) => _.filter(alph, () =>  _.random(1)).join(''));
};

const compare = (arr1, arr2) => {
  const time = Date.now();
  const len = arr1.length > arr2.length ? arr1.length : arr2.length;
  const answ = [];
  let val1, val2;
  for (let i = 0; i < len; i++) {
    val1 = arr1[i] || null;
    val2 = arr2[i] || null;
    if (val1 === val2) continue;
    answ.push([val1, val2]);
  }
  return [answ, Date.now() - time];
};

const compare1 = (arr1, arr2) => { // slow reduce
  const time = Date.now();
  const answ = arr1.length > arr2.length ? arr1 : arr2;
  return [answ.reduce((acc, elem, ind) => {
    if (arr1[ind] === arr2) return acc;
    return [...acc, [arr1[ind] || null, arr2[ind] || null]];
  }, [] ), Date.now() - time];
};

const compare2 = (arr1, arr2) => {
  const time = Date.now();
  const len = arr1.length > arr2.length ? arr1.length : arr2.length;
  const answer1 =  Array.from({ length: len }, (v, k) => {
    if (arr1[k] === arr2[k]) return false;
    return [arr1[k] || null, arr2[k] || null];
  });
  const answer = answer1.filter(elem => elem)
  return [answer, Date.now() - time];
};

const compare3 = (lines1, lines2) => {  // FROM HEXLET
  const time = Date.now();
  const [less, more, directOrder] = lines1.length < lines2.length ?
    [lines1, lines2, false] : [lines2, lines1, true];
  const answer =  more.reduce((acc, line, index) => {
    if (index >= less.length) {
      return [...acc, directOrder ? [line, null] : [null, line]];
    } else if (line !== less[index]) {
      return [...acc, directOrder ? [line, less[index]] : [less[index], line]];
    }
    return acc;
  }, []);
  return [answer, Date.now() - time];
};


const data1 = getAlphRandom1(50000);
const data2 = getAlphRandom1(50100);
//console.log(data1, data2);
console.log('COMPARE TIME ---->', compare3(data1, data2)[1]);