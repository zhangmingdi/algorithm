/**
 * @param {string} s
 * @return {boolean}
 * https://leetcode.cn/problems/valid-palindrome/
 *  验证回文串方法1
 */
const isPalindrome = function (s) {
  let pre = 0
  let last = s.length - 1
  let i = 0
  let j = last
  const reg = /(\d|[a-zA-Z])/i
  while (i <= j) {
    // 如果不是字母或者数字就跳过去
    while (!reg.test(s.charAt(pre))) {
      ++pre
      //如果左右指针相碰后表明验证完毕
      if (pre >= last) return true
    }
    // 如果不是字母或者数字就跳过去
    while (!reg.test(s.charAt(last))) {
      --last
      if (pre >= last) return true
    }
    const preStr = s.charAt(pre).toLowerCase()
    const lastStr = s.charAt(last).toLowerCase()
    //比较
    if (preStr !== lastStr) return false
    pre++
    last--
    i++
    j--
  }
  return true
};


/**
 * @param {string} s
 * @return {boolean}
 *  验证回文串方法2
 * 
 */
var isPalindrome2 = function (s) {
  const reg = /[^\da-zA-Z]/g
  //先剔除掉非字母和数字
  const str = s.replace(reg, '')
  let l = 0
  let r = str.length - 1
  while (r >= l) {
    if (str.charAt(l).toLocaleLowerCase() !== str.charAt(r).toLocaleLowerCase()) return false
    l++
    r--
  }
  return true
};