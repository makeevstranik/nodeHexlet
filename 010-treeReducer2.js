/**
 * Created by Makeev Evgeny on 05.02.18.
 */
// import tree from './008-treeSample'; // for how to use

const treeReducer2 = (fn, tree, acc) => {
  const newAcc = fn(acc, tree);
  if (!tree.children) return acc;
  const fnToReduce = (innerAcc, elem) => treeReducer2(fn, elem, innerAcc);
  return tree.children.reduce(fnToReduce, acc);
};
export default treeReducer2;

// HOW TO USE -------------------------------------
/*
const predicateFn = (acc, n) => (n.type === 'file' ? acc + 1 : acc);
const result = treeReducer2(predicateFn, tree, 0);
console.log(JSON.stringify(result));
*/
