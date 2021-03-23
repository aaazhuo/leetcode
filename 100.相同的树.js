/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  // 思路 DFS 深度递归，比较左右子树节点是否相同，如果不同，直接返回false
  // 判断是否存在当前节点
  if (!p && !q) {
    return true;
  }
  // 判断是否值都存在，且数值不相同
  if (!p || !q || p.val !== q.val) {
    return false;
  }
  // 递归返回左右节点的对比
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
// @lc code=end

