function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var constructMaximumBinaryTree = function (nums) {
    if (nums.length === 0) return null
    if (nums.length <= 1) return new TreeNode(nums[0])
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
// var findDuplicate = function (nums) {

//     let left = nums[0]
//     let right = nums[0]
//     do {
//         left = nums[left]
//         right = nums[nums[right]]
//     }
//     while (left !== right)
//     left = nums[0]
//     while (left !== right) {
//         left = nums[left]
//         right = nums[right]
//     }
//     return left
// };
// console.log('ssssssssss', findDuplicate([1, 3, 4, 2, 2]));

// function merges(l, mid, r, arr) {
//     const newArr = []
//     let p1 = l
//     let p2 = mid + 1
//     let p3 = 0
//     while (p1 <= mid && p2 <= r) {
//         const target = arr[p1] > arr[p2] ? arr[p2++] : arr[p1++];
//         newArr.push(target)
//     }
//     while (p1 <= mid) {
//         newArr.push(arr[p1++])
//     }
//     while (p2 <= r) {
//         newArr.push(arr[p2++])
//     }

//     for (let i = l; i <= r; i++) {
//         arr[i] = newArr[p3++]
//     }

// }
function mergeing(l, mid, r, arr) {
    let minTotal = 0
    const newArr = []
    let p1 = l
    let p2 = mid + 1
    let p3 = 0

    while (p1 <= mid && p2 <= r) {
        debugger
        const target = arr[p1] > arr[p2] ? arr[p2] : arr[p1]
        minTotal += arr[p2] > arr[p1] ? arr[p1] * (r - p2 + 1) : 0
        arr[p1] > arr[p2] ? p2++ : p1++
        debugger
        newArr.push(target)
    }
    while (p1 <= mid) {
        newArr.push(arr[p1++])
    }
    while (p2 <= r) {
        minTotal += arr[p2] * (r - p2)
        newArr.push(arr[p2++])
    }
    for (let i = l; i <= r; i++) {
        arr[i] = newArr[p3++]
    }
    return minTotal
}

const s = "ab", t = "eidbaooo"
//归并排序
var sortArray = function (arr) {
    function doSortArray(array, left, right) {
        if (left === right) return 0
        const mid = Math.floor(right + (left - right) / 2)
        const a = doSortArray(array, left, mid)
        debugger
        const b = doSortArray(array, mid + 1, right)
        return a + b + mergeing(left, mid, right, array)
    }
    return doSortArray(arr, 0, arr.length - 1)

};

// console.log('sssss', sortArray([1, 3, 4, 2, 5]))


//快速排序
var quickSort = function (arr) {

    function doQuickSort(l, r, arr) {
        if (r > l) {
            const mid = arr[Math.floor(l + Math.random() * (r - l + 1))]
            let less = l
            let more = r + 1
            let i = l
            while (i < more) {
                if (arr[i] < mid) {
                    [arr[i], arr[less]] = [arr[less], arr[i]]
                    less++
                    i++
                } else if (arr[i] > mid) {
                    [arr[i], arr[more - 1]] = [arr[more - 1], arr[i]]
                    more--
                } else {
                    i++
                }
            }

            doQuickSort(l, less - 1, arr)
            doQuickSort(more, r, arr)

        }

    }

    doQuickSort(0, arr.length - 1, arr)
    return arr
}
// console.log('sssss', quickSort([1, 2, 3, 4, 5, 6, 111, 222, 44, 22, 33]))

function heapInseart(arr, heapSize) {
    // debugger
    if (heapSize === 1) return
    [arr[0], arr[heapSize - 1]] = [arr[heapSize - 1], arr[0]]
    let rootIndex = 0
    let leftIndex = 2 * rootIndex + 1
    while (leftIndex < heapSize - 1) {
        // debugger
        const largerIndex = leftIndex + 1 < heapSize - 1 && arr[leftIndex + 1] > arr[leftIndex] ? leftIndex + 1 : leftIndex
        if (arr[rootIndex] >= arr[largerIndex]) break
        [arr[rootIndex], arr[largerIndex]] = [arr[largerIndex], arr[rootIndex]]
        rootIndex = largerIndex
        leftIndex = 2 * rootIndex + 1
    }
    debugger
    heapInseart(arr, heapSize - 1)
}

function heapFy(arr) {
    // 自下而上进行大定堆建立
    let i = arr.length - 1
    while (i >= 0) {
        // 先拿它都左右节点比较，把它变为一个大顶堆
        let leftIndex = 2 * i + 1
        let current = i

        while (leftIndex <= arr.length - 1) {
            let maxIndex = leftIndex + 1 <= arr.length - 1 && arr[leftIndex + 1] > arr[leftIndex] ? leftIndex + 1 : leftIndex
            if (arr[maxIndex] <= arr[current]) break
            [arr[maxIndex], arr[current]] = [arr[current], arr[maxIndex]]
            // 记住一定要下沉，！！！！
            current = maxIndex
            leftIndex = 2 * maxIndex + 1
        }
        i--
    }

}

var heapSort = function (arr) {
    //建立大根堆自上而下,思想：每次新加入一个都数，都要和它都根结点比较，然后知道比较到最顶端
    // let i = 0
    // while (i <= arr.length - 1) {
    //拿到该节点到父节点位置
    //     let rootIndex = Math.floor((i - 1) / 2)
    //     let current = i

    //     while (rootIndex >= 0 && arr[current] > arr[rootIndex]) {
    // 进行比较然后把比较大值推到顶端
    //         [arr[rootIndex], arr[current]] = [arr[current], arr[rootIndex]]
    //         current = rootIndex
    //         rootIndex = Math.floor((rootIndex - 1) / 2)
    //     }
    //     i++
    // }
    heapFy(arr)
    debugger
    heapInseart(arr, arr.length)
    return arr
}
console.log('sssss', heapSort([-4, 0, 7, 4, 9, -5, -1, 0, -7, -1]))
