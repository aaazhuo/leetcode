/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// NOTE: 1 采用队列的方法进行广度查找
var zigzagLevelOrder = function(root) {
  if (!root) return []; // 边界条件
  const stack = [root];
  const result = [];
  let flag = true; // 用于判断锯齿方向，采用 push 还是 unshift
  while (stack.length) {
    const len = stack.length;
    const ret = []
    for (let i = 0; i < len; i++) {
      const node = stack.pop();
      flag ? ret.push(node.val) : ret.unshift(node.val);
      node.left && stack.unshift(node.left);
      node.right && stack.unshift(node.right);
    }
    flag = !flag;
    result.push(ret);
  }
  return result;
};
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// NOTE: 2 采用递归方法
var zigzagLevelOrder1 = function(root) {
  if (!root) return [];
  const result = [];
  function zigzagLeve (node, i) {
    if (!result[i]) {
      result[i] = [];
    }
    i % 2 === 0 ? result[i].push(node.val) : result[i].unshift(node.val);
    node.left && zigzagLeve(node.left, i + 1);
    node.right && zigzagLeve(node.right, i + 1);
  }
  zigzagLeve(root, 0);
  return result;
};
// @lc code=end

