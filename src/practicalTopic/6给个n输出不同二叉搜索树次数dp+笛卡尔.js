// https://leetcode-cn.com/problems/unique-binary-search-trees/
/**
 * @param {number} n
 * @return {number}
 */
// 递归  推导公式具体看链接 不同的二叉搜索树
var numTrees = function (n) {
    let total = 0
    if (n === 0 || n === 1) return 1
    for (let i = 1; i <= n; i++) {
        const a = numTrees(i - 1)
        const b = numTrees(n - i)
        total += a * b
    }
    return total
};


//  利用Dp数组优化
var numTrees1 = function (n) {
    const dp = []
    dp[0] = 1
    dp[1] = 1
    for (let i = 2; i <= n; i++) {
        dp[i] = 0
        for (j = 1; j <= i; j++) {
            const a = dp[j - 1]
            const b = dp[i - j]
            dp[i] += a * b
        }
    }
    return dp[n]
};


console.log('numTrees', numTrees1(3));