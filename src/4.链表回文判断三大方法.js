//回文链表

// 递归or压函数栈的方法
// 方法要点！！！可以类比二叉树的前，中，后，层序遍历
//本方法采用后续遍历 
//时间O（n）
//空间O(n)
var isPalindrome1 = function (head) {

    if (!head || head.next === null) return true
    let bool = true
    function travel(node) {
        if (!node) return
        travel(node.next)
        bool = node.val === head.val && bool
        head = head.next
        return bool
    }
    return travel(head)
}


// 遍历法，搞一个栈,无需多言
//时间O（n）
//空间O(n)
var isPalindrome2 = function (head) {
    const stack = []
    let node = head
    while (node) {
        stack.push(node)
        node = node.next
    }

    while (stack.length) {
        if (stack.pop().val !== head.val) return false
        head = head.next
    }
    return true
}

// 快慢指针
//时间O（n）
//空间O(1)
var isPalindrome3 = function (head) {
    let l = head
    let r = head
    while (r !== null && r.next !== null) {
        l = l.next
        r = r.next.next
    }

    let preNode = null
    //反转链表 ！！自己多去思考，提高动脑能力
    while (true) {
        const nextNode = l.next
        l.next = preNode
        preNode = l
        if (nextNode === null) break
        l = nextNode
    }

    let bool = true
    let tim = l
    while (true) {
        bool = tim.val === head.val && bool
        head = head.next
        if (tim.next === null) break
        tim = tim.next
    }

    let lastNode = null
    // 还原链表  呃呃呃神操作
    while (true) {
        const nextNode = l.next
        l.next = lastNode
        preNode = l
        if (nextNode === null) break
        l = nextNode
    }

    return bool
}