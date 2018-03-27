/**
 * Created by Makeev Evgeny on 25.03.18.
 */
import fs from 'fs';

const compare = (data1, data2) => {
  const lines1 = data1.split('\n').slice(0, -1);
  const lines2 = data2.split('\n').slice(0, -1);
  // BEGIN (write your solution here)
  const len = lines1.length > lines2.length ? lines1.length : lines2.length;
  return Array.from({ length: len }, (v, k) => {
    if (lines1[k] === lines2[k]) return false;
    return [lines1[k] === undefined ? null : lines1[k],
      lines2[k] === undefined ? null : lines2[k]];
  }).filter(elem => elem);
  // END
};

// BEGIN (write your solution here)
const diff = (filepath1, filepath2, callback) => {
  fs.readFile(filepath1, (err, data1) => {
    if (err) {callback(err, null);} else {
      fs.readFile(filepath2, (err, data2) => {
        if (err) {callback(err, null);} else {
          const answer = compare(data1.toString(), data2.toString());
          callback(null, answer);
        }
      });
    }
  });

};
export default diff;