/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    // 递归；
    // if (!root) return [];
    // const result = [];
    // function bfs (root, result) {
    //   if (!root) return null;
    //   for(let i=0; i< root.children.length; i++) {
    //     bfs(root.children[i], result);
    //   }
    //   result.push(root.val);
    // }
    // bfs(root, result);
    // return result;
    // 迭代写法
    if (!root) return [];
    const result = [];
    const stack = [root];
    while(stack.length) {
      const node = stack.pop();
      result.push(node.val);
      node.children && node.children.forEach(item => {
        stack.push(item);
      })
    }
    return result.reverse();
};
// @lc code=end

