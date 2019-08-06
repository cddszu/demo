/*
给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
  let l1 = nums1.length, l2 = nums2.length;
  if (l1 > l2) {
    [nums2, nums1] = [nums1, nums2];
    [l1, l2] = [l2, l1];
  }
  let iMin = 0, iMax = l1, halfLen = parseInt((l1 + l2 + 1) / 2);
  while(iMin <= iMax) {
    let i = parseInt((iMin + iMax) / 2);
    let j = halfLen - i;
    if (i< iMax && nums2[j-1] > nums1[i]) {
      iMin = i + 1;
    } else if (i > iMin && nums1[i-1] > nums2[j]) {
      iMax = i - 1;
    } else {
      let maxLeft = 0;
      if (i=== 0) {maxLeft = nums2[j-1]}
      else if (j===0) {maxLeft = nums1[i-1]}
      else {maxLeft = Math.max(nums1[i-1], nums2[j-1])}
      if((l1+l2) % 2 === 1) {return maxLeft}

      let minRight = 0
      if(i===l1) {minRight=nums2[j]}
      else if(j===l2) {minRight=nums1[i]}
      else {minRight = Math.min(nums2[j], nums1[i]);}

      return (maxLeft + minRight) / 2
    }
  }
  return 0.0
};



console.log(findMedianSortedArrays([1], []))
