/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function(root) {
  // BFS 广度搜索遍历
  // if (!root) return null;
  // const stack = [root];
  // let level = 0;
  // while (stack.length) {
  //   let stop = false;
  //   const { length } = stack;
  //   for (let i = 0; i < length; i++) {
  //     const node = stack.shift();
  //     if (!node.left && !node.right) {
  //       stop = true;
  //       break;
  //     }
  //     node.left && stack.push(node.left);
  //     node.right && stack.push(node.right);
  //   }
  //   level++;
  //   if (stop) {
  //     break;
  //   }
  // }
  // return level;
  // 递归 DFS 深度遍历
  if (!root) return 0;
  const left = minDepth(root.left);
  const right = minDepth(root.right);
  return  !root.left || !root.right ? left + right + 1 : Math.min(left, right) + 1;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = minDepth;
// @after-stub-for-debug-end