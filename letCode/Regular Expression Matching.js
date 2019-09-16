/*
给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
*/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    p = p.replace(/\./g, '[a-z]')
    const reg = new RegExp(p)

    let result = reg.exec(s)
    return result ? result[0] === s : false
};
console.log(isMatch("ab", '.*c'))