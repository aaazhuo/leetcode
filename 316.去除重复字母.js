/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  let stack = [];
  let i = -1
  while (++i < s.length) {
      const n = s[i]
      if (stack.includes(n) === false) {
          let j = stack.length
          while(j-- && stack[j] > n
            && s.includes(stack[j], i)) {
            stack.pop();
          }
          stack.push(n);
      }
  }
  return stack.join('')
};
// @lc code=end
