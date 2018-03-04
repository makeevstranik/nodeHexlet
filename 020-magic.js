/**
 * Created by Makeev Evgeny on 04.03.18.
 */
const magic = (...args) => {
  const getSum = (...arg) => {
    getSum.sum += arg.reduce((acc, elem) => acc + elem, 0);
    getSum.valueOf = () => getSum.sum;
    return getSum;
  };
  getSum.sum = 0;
  return getSum(...args);
};
export default magic;
