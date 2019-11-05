/*
返回 A 的最短的非空连续子数组的长度，该子数组的和至少为 K 。

如果没有和至少为 K 的非空子数组，返回 -1 。
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function(A, K) {
    A = A.sort((a,b) => a-b);
    let target = {
      result: 0,
      arr: []
    };
    let resultLength = -1;
    A.map(i => {
      target.result += i;
      target.arr.push(i)
      while (target.result >= K) {
        resultLength = target.arr.length;
        target.result = target.result - target.arr.shift();
      }
    })
    return resultLength
};
console.log(shortestSubarray([2,-1,2], 3))