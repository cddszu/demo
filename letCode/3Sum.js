/*
给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort()
  if (nums[0]>0 || nums[nums.length-1] < 0) {
    return []
  }
  const resultArr = []
  for(let i= 0;i<nums.length;i++) {
    let start = i+1, end = nums.length - 1;
    while(start<end) {
      let result = nums[start] + nums[end] + nums[i];
      if (result === 0) {
        resultArr.push([nums[start],nums[i], nums[end]].sort((a, b) => a-b));
         start++
         end--
      }else if(result > 0) {
        end--
      } else {
        start++
      }
    }
  }

  let map = {}
  return resultArr.filter(item => {
    if (map[item.join()]) {
      return false
    }
    map[item.join()] = true
    return true
  })
};
console.log(threeSum([-5, -3, -3, -2, -2, -2, -1, -1, 0, 1, 1, 1, 2, 3, 3, 4, 4]))
