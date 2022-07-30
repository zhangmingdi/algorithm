import list from './list'

//双指针，合并排序，迭代法
function mergeTwoLists0(left, right) {
    if (left === null) return right
    if (right === null) return left
    if (left === null && right === null) return null
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
    pointer.next = left ? left : right

    // while (left !== null) {
    //     pointer.next = left
    //     pointer = left
    //     left = left.next
    // }
    // while (right !== null) {
    //     pointer.next = right
    //     pointer = right
    //     right = right.next
    // }
    return header
}

function mergeTwoLists(left, right) {
    if (left === null || right === null) {
        return left === null ? right : left
    }
    else if (left.val > right.val) {
        right.next = mergeTwoLists(left, right.next)
        return right
    } else {
        left.next = mergeTwoLists(left.next, right)
        return left
    }
}