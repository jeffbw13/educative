class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }

  // level order traversal using 'next' pointer
  print_level_order() {
    console.log("Level order traversal using 'next' pointer: ");
    let nextLevelRoot = this;
    while (nextLevelRoot !== null) {
      let current = nextLevelRoot;
      nextLevelRoot = null;
      while (current != null) {
        process.stdout.write(`${current.val} `);
        if (nextLevelRoot === null) {
          if (current.left !== null) {
            nextLevelRoot = current.left;
          } else if (current.right !== null) {
            nextLevelRoot = current.right;
          }
        }
        current = current.next;
      }
      console.log();
    }
  }
};

const connect_level_order_siblings = function(root) {
  // TODO: Write your code here
  const queue = [root];
  while(queue.length !== 0) {
    const levelNumItems = queue.length;
    for (let a = 0; a < levelNumItems; a++) {
      //
      let node = queue.shift();
      if (a + 1 === levelNumItems) {
        node.next = null;  // is this still pointing to tree?
      } else {
        node.next = queue[0];  // bc of shift
      }
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }
};


var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connect_level_order_siblings(root);

root.print_level_order()