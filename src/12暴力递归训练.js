/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
//https://leetcode-cn.com/problems/hanota-lcci/
var hanota = function (A, B, C) {
    const n = A.length
    function move(num, a, b, c) {
        //base case最后一个
        if (num === 1) {
            c.push(a.pop())
            return
        }


        //汉诺塔经典递归问题 记住一个点
        //a柱子的n圆盘要移到c柱子===先移动n-1柱子到b柱子，
        move(num - 1, a, c, b)

        //接着把a柱子最底的移到c柱子最底部
        c.push(a.pop())

        //转换问题 b柱子n-1圆盘移动到c
        move(num - 1, b, a, c)
    }
    move(n, A, B, C)
};


// 打印一个字符串的子串 明白子串的原理就能递归做出来
// 讲究顺序的子串 可以用二叉树画出来
var printCharacterSon = (str) => {
    function doPrint(i, str, lastStr, arr = []) {
        if (i === str.length) {
            return arr.push(lastStr)
        }
        const composed = lastStr + str[i]
        doPrint(i + 1, str, composed, arr)
        doPrint(i + 1, str, lastStr, arr)
        return arr
    }
    return doPrint(0, str, '')
}

// https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/
//字符串的排列（回溯？暴力递归？）
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {

    const map = new Map()

    // 字符创替换
    function swap(str, j, k) {
        // str.jo
        const arrStr = str.split('')
        const saveStr = arrStr[j]
        arrStr[j] = arrStr[k]
        arrStr[k] = saveStr
        return arrStr.join('')
    }

    function doPermutation(n, s, arr = []) {
        if (n === s.length) {
            if (!map.has(s)) {
                arr.push(s)
                map.set(s, true)
            }
            return
        }
        //利用替换字符串来限制下一位的排列，然后排列完成之后在替换回字符串
        for (let i = n; i < s.length; i++) {
            s = swap(s, n, i)
            doPermutation(n + 1, s, arr)
            s = swap(s, n, i)
        }
        return arr
    }
    return doPermutation(0, s,)
};

// console.log("permutation", permutation("aab")); 
// 栈的逆序 结合弹出栈底
function reverseStack(arr) {
    if (arr.length === 0) return
    const item = popStackLast(arr)
    reverseStack(arr)
    arr.push(item)
    return arr
}
// 弹出栈底
function popStackLast(stack) {
    const item = stack.pop()
    if (stack.length === 0) return item
    const last = popStackLast(stack)
    stack.push(item)
    return last
}

// console.log('sdsdsd', reverseStack([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/**
 * @param {number[]} piles
 * @return {boolean}
 */
//  https://leetcode-cn.com/problems/stone-game/
// 纸牌游戏，

// 先手函数 总会往自己最好的结果去走
function f(arr, l, r) {
    if (l === r) return arr[l]
    return Math.max(arr[l] + s(arr, l + 1, r), arr[r] + s(arr, l, r - 1))
}
// 后手函数 被动地走自己最坏的结果去走
function s(arr, l, r) {
    if (l === r) return 0
    return Math.min(f(arr, l + 1, r), f(arr, l, r - 1))
}

var stoneGame = function (piles) {
    if (!piles || !piles.length) return false

    return f(piles, 0, piles.length - 1) > s(piles, 0, piles.length - 1)

};