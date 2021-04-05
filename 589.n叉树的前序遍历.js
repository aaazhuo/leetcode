/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  // 递归遍历
  // if (!root) return [];
  // const result = [];
  // function bfs(root, result) {
  //   if (!root) return null;
  //   result.push(root.val);
  //   for (let i=0; i<root.children.length;i++) {
  //     bfs(root.children[i], result);
  //   }
  // }
  // bfs(root, result);
  // return result
  // 迭代遍历
  if (!root) return [];
  const result = [];
  const stack = [root];
  while(stack.length) {
    const node = stack.pop();
    result.push(node.val);
    node.children && node.children.reverse().forEach(item => {
      stack.push(item);
    })
  }
  return result;
};
// @lc code=end

