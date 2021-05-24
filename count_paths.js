class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

const count_paths = function(root, S) {
  // TODO: Write your code here
  let result = [];  //  contains paths sought
  //  need to hold onto traversed values
  let traversed = [];
  let paths = 0;
  function recurse(node, sum) {
    //  this will hold all values shifted off traversed this level
    let shiftedVals = [];   //  should be for this level
    //  base case: root is null this time
    if (node === null) {
      return;
    }
    traversed.push(node.value);
    //  if new sum would be greater than S, slide the window
    while (sum + node.value > S) {
      sum -= traversed[0];
      shiftedVals.push(traversed.shift());
    }
    sum += node.value;
    //  if matched our target sum, push traversed onto result array
    if (sum === S) {
      result.push(traversed.slice(0));
    }
    //  BUT, we need to continue to traverse
    recurse(node.left, sum);
    recurse(node.right, sum);
    //  when going back to previous level, put shifted items back into traversed
    // for (let x = shiftedVals.length - 1; x >= 0; x--) {
    //   traversed.unshift(shiftedValues[x])
    //   sum += shiftedValues[x];
    // }
    //  when returning,
  }
  recurse(root, 0);
  return result;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree has paths: ${count_paths(root, 11)}`)