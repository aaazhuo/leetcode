/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) return [];
  const result = [];
  const stack = [root];
  while (stack.length) {
    const length = stack.length;
    const res = [];
    for (let i = 0; i < length; i++) {
      const node = stack.shift();
      res.push(node.val);
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
    result.unshift(res);
  }
  return result;
};
// @lc code=end

