/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const len = s.length
    let l = 0
    // let r = 0
    let max = 0
    let curLen = 0
    const map = new Map()
    for (let i = 0; i < len; i++) {
        if (!map.has(s.charAt(i))) {
            curLen++
            map.set(s.charAt(i), i)
        } else {
            max = Math.max(max, curLen)
            curLen = i - map.get(s.charAt(i))
            for (let j = l; j < map.get(s.charAt(i)); j++) {
                map.delete(s.charAt(j))
            }
            l = map.get(s.charAt(i)) + 1
            map.set(s.charAt(i), i)
        }

    }
    return Math.max(max, curLen)
};


var lengthOfLongestSubstring2 = function (s) {
    const len = s.length
    let l = 0
    // let r = 0
    let max = 0
    let curLen = 0
    const map = new Map()
    for (let i = 0; i < len; i++) {
        if (!map.has(s.charAt(i))) {
            curLen++
            map.set(s.charAt(i), i)
        } else {
            const index = map.get(s.charAt(i))
            //如果在窗口范围之内 就得更新窗口
            if (index >= l) {
                max = Math.max(max, curLen)
                curLen = i - index
                l = index + 1
                map.set(s.charAt(i), i)
            } else {
                curLen++
                map.set(s.charAt(i), i)
            }

        }

    }
    return Math.max(max, curLen)
};

console.log('滑动窗口', lengthOfLongestSubstring('abcabcbb',));