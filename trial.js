/**
 * Created by makeev on 02.02.18.
 */
const treePrinter = (tree) => {
  const [treeElement, child] = tree;
  console.log(treeElement);
  if (!child) return;
  return child.map(treePrinter);
};
export default treePrinter;

