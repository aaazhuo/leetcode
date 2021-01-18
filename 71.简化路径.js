/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const stack = [];
  const paths = path.split('/');
  paths.forEach(item => {
    if (item === '..') {
      stack.pop();
    } else if (item && item !== '.') {
      stack.push(item);
    }
  });
  return `/${stack.join('/')}`
};
// @lc code=end

