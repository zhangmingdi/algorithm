import list from './list'


let last

//另一种解法，递归思想的训练
function reverseList2(head) {
    if (!head || head.next === null) return head
    const header = reverseList(head.next)
    head.next.next = head
    head.next = null
    return header
}

// 递归反转整个链表
function reviseList(list) {

    function doRevise(node) {
        // 相当于进入这个点
        if (node.next === null) {
            last = node
            return node
        } else {
            const preNode = doRevise(node.next)
            preNode.next = node
            node.next = null
            return node
        }

    }
    doRevise(list._head)
}
// reviseList(list)

// 递归反转部分链表
function reviseSomeList(header, i) {

    let num = 0
    let newHeader
    let record

    function doRevise(node) {
        num++
        // 相当于进入这个点
        if (num === i) {
            record = node.next
            newHeader = node
            return node
        } else {
            const preNode = doRevise(node.next)
            preNode.next = node
            node.next = null
            return node
        }

    }
    doRevise(header).next = record

    return newHeader
}
// reviseSomeList(list, 3)
// console.log('gggggggg', reviseSomeList(list._head, 4));

// 递归反转区间链表
function reviseIncludeList(header, from, to) {

    if (from === 1) {
        return reviseSomeList(header, to)
    } else {
        const newheader = reviseIncludeList(header.next, from - 1, to - 1)
        header.next = newheader
        return header
    }


}
// console.log('222', reviseIncludeList(list._head, 2, 4),);

// reviseIncludeList(list)
// 循环写法
function reveseFor(head) {
    let pre = null
    let cur = head
    let newHead
    while (cur) {
        if (cur.next === null) {
            newHead = cur
        }
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return newHead
}

// 循环反转部分链表
function reveseForSome(head, from, to) {
    let preLeft
    let left
    let right
    let rightNext


    let vitual = {}
    vitual.next = head
    preLeft = vitual
    for (let i = 0; i < from - 1; i++) {
        preLeft = preLeft.next
    }

    right = preLeft
    left = preLeft.next
    for (let i = 0; i <= to - from; i++) {
        right = right.next
    }
    rightNext = right.next

    preLeft.next = null
    right.next = null

    const newHead = reveseFor(left)

    preLeft.next = newHead
    left.next = rightNext
    return vitual.next
}

// console.log('333', reveseForSome(list._head, 1, 4));

//头插法
function inseartHead(head, from, to) {

    let cur
    let pre

    const obj = {}
    obj.next = head
    pre = obj
    for (let i = 0; i < from - 1; i++) {
        pre = pre.next
    }

    cur = pre.next

    for (let i = 0; i < to - from; i++) {
        const next = cur.next
        cur.next = next.next
        next.next = pre.next
        pre.next = next
    }

    return obj.next
}

console.log('333', inseartHead(list._head, 2, 5));


