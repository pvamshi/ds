var heapify = require('./heapify.js');
heapify.heapifyDefault();

var arr = [];
arr.heapPush(2);
arr.heapPush(25);
arr.heapPush(12);
arr.heapPush(28);
arr.heapPush(25);
arr.heapPush(20);
arr.heapPush(42);
console.log(arr);
console.log(arr.heapPop());
console.log(arr);
arr.pop();
arr.pop();
arr.pop();
arr.pop();
console.log(arr);
