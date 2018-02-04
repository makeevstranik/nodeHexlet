/**
 * Created by Makeev Evgeny on 04.02.18.
 */
// import tree from './008-treeSample';  // take tree for testing

const treeFilter2 = (fn, tree) => {
  if (!fn(tree)) return null;
  return { ...tree, children: tree.children.map(c => treeFilter2(fn, c)).filter(elem => elem) };
};
export default treeFilter2;
// HOW TO USE
/*
const fnToFilter = (n => n.type === 'directory');
const result = treeFilter2(fnToFilter, tree);
console.log(JSON.stringify(result));
*/

