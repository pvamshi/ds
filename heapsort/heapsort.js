exports.heap = heap;
function heap(_compare) {

  var hs = [];

  function add(e) {
    var size = hs.push(e);
    var pos = size - 1;
    fix(pos);
  }

  function compare(pos1, pos2) {
    if(_compare){
      return _compare(hs[pos1], hs[pos2]);
    }
    if (hs[pos1] === hs[pos2]) {
      return 0;
    }
    return hs[pos1] > hs[pos2] ? 1 : -1;
  }

  function fill(pos) {
    var left = pos * 2 + 1;
    var right = pos * 2 + 2;
    var size = hs.length;

    if (left == size - 1) {
      swap(pos, left);
      hs.pop();
    } else if (left >= size) {
      swap(pos, size - 1);
      hs.pop();
    } else if (compare(left,right)>0) {
      swap(pos, left);
      fill(left);
    } else {
      swap(pos, right);
      fill(right);
    }
  }

  function fix(pos) {
    if (pos <= 0) {
      return;
    }
    var parentPos = ~~((pos - (((pos + 1) % 2) + 1)) / 2);
    if (compare(pos,parentPos)>0) {
      swap(parentPos, pos);
      fix(parentPos);
    }
  }

  function swap(pos1, pos2) {
    var temp = hs[pos1];
    hs[pos1] = hs[pos2];
    hs[pos2] = temp;
  }

  function pop() {
    if (hs.length <= 0) {
      return;
    }
    var val = hs[0];
    fill(0);
    return val;
  }
  return {
    add: add,
    pop: pop,
    show: function() {
      console.log(hs);
    }
  };
}
