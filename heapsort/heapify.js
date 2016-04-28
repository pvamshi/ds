exports.heapifyDefault = heapifyDefault;
function heapifyDefault(_compare) {
  Array.prototype.heapPush = function(e){
    var size = this.push(e);
    var pos = size - 1;
    fix(this,pos);
  }
  Array.prototype.heapPop = function() {
    if (this.length <= 0) {
      return;
    }
    var val = this[0];
    fill(this,0);
    return val;
  }

  function compare(a, b) {
    if(_compare){
      return _compare(a, b);
    }
    if (a === b) {
      return 0;
    }
    return a > b ? 1 : -1;
  }

  function fill(hs, pos) {
    var left = pos * 2 + 1;
    var right = pos * 2 + 2;
    var size = hs.length;

    if (left == size - 1) {
      swap(hs, pos, left);
      hs.pop();
    } else if (left >= size) {
      swap(hs, pos, size - 1);
      hs.pop();
    } else if (compare(left,right)>0) {
      swap(hs, pos, left);
      fill(hs, left);
    } else {
      swap(hs, pos, right);
      fill(hs, right);
    }
  }

  function fix(hs, pos) {
    if (pos <= 0) {
      return;
    }
    var parentPos = ~~((pos - (((pos + 1) % 2) + 1)) / 2);
    if (compare(hs[pos], hs[parentPos])>0) {
      swap(hs,parentPos, pos);
      fix(hs, parentPos);
    }
  }

  function swap(hs, pos1, pos2) {
    var temp = hs[pos1];
    hs[pos1] = hs[pos2];
    hs[pos2] = temp;
  }

}
