var heapsort = require('./heapsort.js');
var heap1 = heapsort.heap(function(hs,pos1,pos2) {
  if (hs[pos1] === hs[pos2]) {
    return 0;
  }
  return hs[pos1] < hs[pos2] ? 1 : -1;
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
