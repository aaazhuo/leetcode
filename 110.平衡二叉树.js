/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  // 自顶向下遍历
  // if (!root) return true;
  // function dfs (root, depth) {
  //   if (!root) return 0;
  //   const left = dfs (root.left, depth + 1);
  //   const right = dfs (root.right, depth + 1);
  //   return Math.max(left, right) + 1;
  // }
  // if (Math.abs(dfs(root.left, 0) - dfs(root.right, 0)) > 1) {
  //   return false;
  // }
  // return isBalanced(root.left) && isBalanced(root.right)
  // 自底向上遍历
  function epilogue(root) {
    if (!root) return 0;
    const left = epilogue(root.left);
    const right = epilogue(root.right);
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
      return -1;
    }
    return Math.max(left, right) + 1;
  }
  return epilogue(root) >= 0;
};
// @lc code=end

