/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  const stack = [];
  ops.forEach((item, index) => {
    if (item === 'C') {
      stack.pop()
    } else if (item === 'D' && index - 1 >= 0) {
      const pre = stack.pop();
      stack.push(pre, pre * 2)
    } else if (item === '+' && index - 2 >= 0) {
      const pre = stack.pop();
      const pre1 = stack.pop()
      stack.push(pre1, pre, pre + pre1)
    } else {
      stack.push(+item);
    }
  })
  return stack.reduce((total, number) => total + number);
};
// @lc code=end

