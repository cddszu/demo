/**
 * @param {string} s
 * @return {number}
 */


var strongPasswordChecker = function(s) {
  let length = s.length, repeatEle = []
  let start = 0, end = 0, ele

  for(let i=0;i<length+1;i++) {
    if (s[i] === ele) {
      end = i
    } else {
      if (end - start >= 2) {
        repeatEle.push({start, end, ele, length: end-start + 1})
      }
      start = end = i
      ele = s[i]
    }
    
  }
  return repeatEle
};

console.log(strongPasswordChecker('aabbbcccccc'))