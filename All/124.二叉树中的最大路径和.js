/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 * @return {number}
 */
var maxPathSum = function(root) {
  if (!root) return 0;
  let max = - Number.MAX_SAFE_INTEGER;
  function getMaxNumber(node){
    if (!node) {
      return 0;
    }
    const leftMax = getMaxNumber(node.left);
    const rightMax = getMaxNumber(node.right);
    max = Math.max(max, node.val + leftMax + rightMax);
    return Math.max(node.val + leftMax, node.val + rightMax, 0);
  }
  getMaxNumber(root);
  return max;
};
// @lc code=end

