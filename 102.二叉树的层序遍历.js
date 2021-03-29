/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function(root) {
  //层次遍历
  // if (!root) return [];
  // const result = [];
  // const stack = [root]
  // while (stack.length) {
  //   let res = [];
  //   const length = stack.length;
  //   for (let i = 0; i < length; i++) {
  //     const node = stack.shift();
  //     res.push(node.val);
  //     node.left && stack.push(node.left);
  //     node.right && stack.push(node.right);
  //   }
  //   result.push(res)
  // }
  // return result
  // 递归遍历 dfs 深度遍历 通过数组index去进行寻找
  if (!root) return [];
  function dfs(root, index, res){
    if (root){
      if (!res[index]) res[index] = []
      res[index].push(root.val)
      dfs(root.left, index + 1, res)
      dfs(root.right, index + 1, res)
    }
  }
  const result = [];
  dfs(root, 0, result);
  return result;
};
// @lc code=end

