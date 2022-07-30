// https://leetcode-cn.com/problems/longest-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
//  最长递增子序列 dp数组
var lengthOfLIS = function (nums) {
    const dp = []
    dp[0] = 1
    let maxans = 1;

    for (let i = 1; i < nums.length; i++) {
        dp[i] = 1
        for (j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        maxans = Math.max(maxans, dp[i])
    }
    return maxans
};

console.log('sdskds', lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));