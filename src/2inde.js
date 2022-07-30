function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var constructMaximumBinaryTree = function (nums) {
    if (nums.length === 0) return null
    if (nums.length <= 1) return new TreeNode(nums[0])
    debugger
    let index = 0
    let max = nums[0]

    for (let i = 1; i <= nums.length - 1; i++) {
        if (nums[i] > max) {
            index = i
            max = nums[i]
        }
    }


    const left = constructMaximumBinaryTree(nums.slice(0, index))
    const right = constructMaximumBinaryTree(nums.slice(index + 1))

    const root = new TreeNode(max, left, right)

    return root
}

// const i = constructMaximumBinaryTree([3, 2, 1, 6, 0, 5])
// console.log('ggggg', i);

var merge = function (nums1, m, nums2, n) {
    let newList = []
    let num1 = 0
    let num2 = 0
    while (num1 < m && num2 < n) {
        debugger
        if (nums1[num1] <= nums2[num2]) {
            newList.push(nums1[num1])
            num1++
        } else {
            newList.push(nums2[num2])
            num2++
        }
    }
    if (num1 === m) {
        newList = newList.concat(nums2.slice(num2, n))
    } else if (num2 == n) {
        newList = newList.concat(nums1.slice(num1, m))
    }
    return newList
};

// console.log('ssssssssss', merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// 寻找重复数 二分法
var findDuplicate = function (nums) {
    let left = 1
    let right = nums.length - 1
    const n = nums.length - 1
    while (left < right) {

        const mid = Math.floor((left + right) / 2)
        let i = 0
        for (let i = 0; i <= n; i++) {
            if (nums[i] <= mid) {
                i++
            }
        }
        if (i <= mid) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    return right
};
console.log('ssssssssss', findDuplicate([1, 3, 4, 2, 2]));
var checkInclusion = function (s, t) {

    const hash = new Map()
    const obj = {}
    for (let i = 0; i < t.length; i++) {
        if (hash.has(t[i])) {
            hash.set(t[i], hash.get(t[i]) + 1)
        } else {
            hash.set(t[i], 1)
        }
        obj[t[i]] = 0
    }

    let start = 0
    let end = 0
    let length = Number.MAX_VALUE
    let vaild = 0
    let left = 0

    while (end < s.length) {
        const str = s[end]
        if (hash.has(str)) {
            obj[str]++
            if (obj[str] <= hash.get(str)) {
                vaild++
            }
        }
        end++
        while (vaild === t.length) {
            debugger
            if (length > end - start) {
                length = end - start
                left = start
            }
            const startStr = s[start]
            if (hash.has(startStr) && --obj[startStr] < hash.get(startStr)) {
                vaild--
            }
            start++
        }

    }
    return length === Number.MAX_VALUE ? '' : s.substr(left, length)
};