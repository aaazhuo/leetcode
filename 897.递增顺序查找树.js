/*
 * @lc app=leetcode.cn id=897 lang=javascript
 *
 * [897] 递增顺序查找树
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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  if (!root) return null;
  let tree = new TreeNode();
  const res = tree;
  function bfs (root) {
    if (!root) return null;
    root.left && bfs(root.left);
    tree.right = new TreeNode(root.val);
    tree = tree.right;
    root.right && bfs(root.right);
  }
  bfs(root);
  return res.right;
};
// @lc code=end

