'use strict';
exports.countingSort = function countingSort(_ar, getVal) {
  if(!getVal){
    getVal = (a) => a;
  }
  var temp = [];
  var result = [];
  _ar.forEach(a => {
    var elem = getVal(a);
    if(!temp[elem]){
      temp[elem]=[];
    }
    temp[elem].push(a);
  });
  temp.forEach((t) => {
    if (!t || t.length === 0) {
      return;
    }
    for (var i = 0; i < t.length; i++) {
      result.push(t[i]);
    }
  });
  return result;
}
