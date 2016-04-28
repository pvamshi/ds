'use strict';
var countingSort = require('./counting-sort.js').countingSort;
exports.radixSort = radixSort;

function radixSort(_arr) {
  var k = 1;
  var max = getMax(_arr);
  while (k < max) {
    _arr = countingSort(_arr, a => (~~(a / k)) % k);
    k *= 10;
  }
  return _arr;
}

function getMax(_arr) {
  var m = 0;
  _arr.forEach(a => {
    if (a > m) {
      m = a;
    }
  });
  return m;
}
