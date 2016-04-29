exports.btree = btree;
function btree(){
  var root = {};
  function add(...vals){
    vals.forEach((val)=> addToNode(root,val));
  }
  function getRoot(){
    return root;
  }
  function addToNode(node, val){
    if(!node.val){
      node.val = val;
      node.left = {};
      node.right = {};
    }else {
      addToNode(val<=node.val? node.left:node.right,val);
    }
  }
  function print(){
    printNode(root);
  }
  function printNode(node){
    if(!node){
      return;
    }
    printNode(node.left);
    if(node.val){
      console.log(node.val);
    }
    printNode(node.right);
  }
  return {
    'add':add,
    'getRoot':getRoot,
    'print':print
  };
}
