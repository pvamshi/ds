var heapsort = require('./heapsort.js');
var heap1 = heapsort.heap(function(a,b) {
  if (a === b) {
    return 0;
  }
  return a < b ? 1 : -1;
});

heap1.add(2);
heap1.add(23);
heap1.add(35);
heap1.add(24);
heap1.add(5);
heap1.add(24);
heap1.add(35);
heap1.add(4);
heap1.add(24);
var h = heap1.pop();
// for(var i=0; i<3 ; i++){
while (h) {
  console.log(h);
  h = heap1.pop();
}
//console.log(hs);
var heap2 = heapsort.heap();

heap2.add(2);
heap2.add(23);
heap2.add(35);
heap2.add(24);
heap2.add(5);
heap2.add(24);
heap2.add(35);
heap2.add(4);
heap2.add(24);
var h = heap2.pop();
// for(var i=0; i<3 ; i++){
while (h) {
  console.log(h);
  h = heap2.pop();
}
//console.log(hs);
