import newList from ".././list";


var reverseList = function (head) {
    if (!head || head.next === null) return head
    const tail = reverseList(head.next)
    head.next.next = head
    head.next = null
    return tail
};

var reverseList2 = function (head) {
    let cur = head
    let pre = null
    debugger
    while (cur) {
        debugger
        const curNext = cur.next
        cur.next = pre
        pre = cur
        if (!curNext) break
        cur = curNext
    }
    return cur
};

console.log('reverseList2', reverseList2(newList.head));