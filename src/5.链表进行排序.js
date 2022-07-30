import list from './list'

function sortArr(arr, start, end) {
    if (start >= end) return
    const rndom = Math.floor(Math.random() * (end - start + 1)) + start
    const mid = arr[rndom]
    let left = start
    let right = end + 1

    let i = start
    //注意好闭区间，要想清楚，不然debugeer难，debugeer可以从小规模做起
    while (i < right) {
        if (arr[i].val < mid.val) {
            [arr[left], arr[i]] = [arr[i], arr[left]]
            left++
            i++
        } else if (arr[i].val > mid.val) {
            right--
            [arr[right], arr[i]] = [arr[i], arr[right]]
        } else {
            i++
        }
        // debugger
    }
    sortArr(arr, start, left - 1)
    sortArr(arr, right, end)
}

// 排序链表 用一个数组 然后快速排序
var reorderList2 = function (head) {
    const arr = []

    while (head !== null) {
        arr.push(head)
        head = head.next
    }
    sortArr(arr, 0, arr.length - 1)
    for (let i = 0; i <= arr.length - 1; i++) {
        arr[i].next = arr[i + 1] ? arr[i + 1] : null
    }
    console.log('最红输出结果', arr.map(item => item.val));
};
// reorderList(list.head)

// 有序链表合并
function merge(left, right) {
    // 合并和数组归并当合并一样
    let pointer
    // 保存头部
    let header
    while (left !== null && right !== null) {
        const node = left.val > right.val ? right : left
        if (pointer) {
            pointer.next = node
        }
        if (!header) {
            header = node
        }
        pointer = node
        left.val > right.val ? right = right.next : left = left.next
    }

    while (left !== null) {
        pointer.next = left
        pointer = left
        left = left.next
    }
    while (right !== null) {
        pointer.next = right
        pointer = right
        right = right.next
    }
    return header
}

// 链表排序 归并方法 空间O(1)时间O(nlog(n)) 使用归并排序
//!!另外归并还有一种自底向上
var sortList = function (head) {
    // 注意当链表只有一个的时候或者没有的时候就不要排序
    if (head === null || head.next === null) return head
    let l = head
    let r = head
    while (r !== null && r.next !== null) {
        r = r.next.next
        //这样做当链表个数为双个数，可让慢指针指向中间当前一个
        if (r !== null) {
            l = l.next
        }
    }
    const right = l.next
    l.next = null
    const leftHeader = sortList(head)
    const rihghtHeader = sortList(right)
    return merge(leftHeader, rihghtHeader)
};
// console.log('sss', sortList(list.head));