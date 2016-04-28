'use strict';
var countingSort= require('./counting-sort.js').countingSort;
var arr = [];
arr = [25,63,274,8,93,92,50,129];

var step1 = countingSort(arr,function(a) {
  return (~~(a/10))%10;
});
var k = 100;
var step2 = countingSort(step1, a => (~~(a / k)) % k);
var step3 = countingSort(step2);
console.log(step3);
