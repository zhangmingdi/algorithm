// 矩阵01求岛屿问题
// https://leetcode-cn.com/problems/number-of-islands/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const n = grid.length - 1
  const m = grid[0].length - 1
  let res = 0
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      if (grid[i][j] === '1') {
        res++
        // 简单的递归调用
        injectd(grid, i, j, n, m)
      }

    }
  }
  return res
};
// 感染函数
function injectd(grid, i, j, n, m) {
  if (i < 0 || i > n || j < 0 || j > m || grid[i][j] !== "1") return
  grid[i][j] = 2
  injectd(grid, i + 1, j, n, m)
  injectd(grid, i - 1, j, n, m)
  injectd(grid, i, j + 1, n, m)
  injectd(grid, i, j - 1, n, m)
}

// 01背包问题二维动态规划
// 需要自己把表画出来
function getBigger(list, packge) {
  let arr = []
  for (let i = 0; i < list.length; i++) {
    arr[i] = []
    for (let j = 0; j <= packge; j++) {
      if (j === 0) {
        arr[i][j] = 0
      } else {
        if (list[i].weight > j) {
          arr[i][j] = arr[i - 1]?.[j] || 0
        } else {
          arr[i][j] = Math.max(list[i].val + arr[i - 1]?.[j - list[i]?.val || 0], arr[i - 1]?.[j] || 0)
        }
      }
    }
  }
  return arr[list.length - 1][packge]
}

// 零钱兑换，最少硬币个数
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//  https://leetcode-cn.com/problems/coin-change/
var coinChange = function (coins, amount) {
  // 解题思路 二维数组 
  // 核心公式 当有这么i个硬币的时候的最优解 1.可能不需要这个金币2.需要这个金币
  //边界判断-1个金币的判断 -j金额的判断
  let arr = []
  for (let i = 0; i < coins.length; i++) {
    arr[i] = []
    for (let j = 0; j <= amount; j++) {
      if (i === 0 && j === 0) {
        arr[i][j] = 0
      } else {
        let coin = i - 1
        let surplus = j - coins[i]
        //边界判断-1个金币的判断 -j金额的判断
        let left = coin < 0 ? Number.MAX_VALUE : arr[coin][j]  // 1.可能不需要这个金币
        let right = surplus < 0 ? Number.MAX_VALUE : arr[i][surplus] + 1 //2.需要这个金币

        arr[i][j] = Math.min(left, right)
      }
    }
  }
  return arr[coins.length - 1][amount] === Number.MAX_VALUE ? -1 : arr[coins.length - 1][amount]
};

// console.log('coinChange', coinChange([1, 2, 5], 0));

// 零钱兑换2，最少硬币个数
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
//  https://leetcode-cn.com/problems/coin-change-2/
//同理上面 画一个二维数组
var change = function (amount, coins) {
  const arr = []
  for (let i = 0; i < coins.length; i++) {
    arr[i] = []
    for (let j = 0; j <= amount; j++) {
      if (i === 0 && j === 0) {
        arr[i][j] = 1
      } else {
        const left = i - 1 < 0 ? 0 : arr[i - 1][j]
        const right = j - coins[i] < 0 ? 0 : arr[i][j - coins[i]]
        arr[i][j] = left + right
      }
    }
  }
  return arr[coins.length - 1][amount]

};