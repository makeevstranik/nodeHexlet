/**
 * Created by Makeev Evgeny on 16.02.18.
 */
const sortDeps = (depList) => {
  const devKeys = Object.keys(depList);

  const fnToReduce = (acc, elem) => depList[elem].length ?
    [...acc, ...iterChild(depList[elem]), elem] :
    [...acc, elem];

  const iterChild = (child) => {
    const fnToIterChild = (acc, elem) => devKeys.includes(elem) ?
      fnToReduce(acc, elem) :
      [...acc, elem];
    return child.reduce(fnToIterChild, []);
  };

  const presortedList = devKeys.reduce(fnToReduce, []);
  return presortedList.reduce((acc, elem) => acc.includes(elem) ? acc : [...acc, elem], []);
};

export default sortDeps;

// HOW TO USE
/*
const deps1 = {
  mongo: [],
  tzinfo: ['thread_safe'],
  uglifier: ['execjs'],
  execjs: ['thread_safe', 'json'],
  redis: [],
};
console.log(sortDeps(deps1));
*/
