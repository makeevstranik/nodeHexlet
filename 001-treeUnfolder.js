const treeUnfolder = (anyTree) => {
  const fn = (acc, value) =>
    (value instanceof Array ? acc + treeUnfolder(value) : acc + value);
  return anyTree.reduce(fn, '');
};
export default treeUnfolder;
/*
const tree = ['a', [['b', [['e'], ['f']]], ['c'], ['d', [['g'], ['j']]]]];
const res = treeUnfolder(tree);
console.log('---->', res);
*/

