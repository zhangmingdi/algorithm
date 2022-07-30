class Node {
    constructor(item) {
        this.val = item
        this.next = null
    }
}
class SingleLinkList {
    constructor(item) {
        this._head = null
    }
}


const list = new SingleLinkList()

let cur = list._head = new Node(1)

for (let i = 2; i <= 4; i++) {
    const a = new Node(i)
    cur.next = a
    cur = a
}

function randomRange(left, right) {
    const a = Math.floor(Math.random() * (right - left + 1) + left)
    return a
}

// 随机打乱一个链表呗

function rndomList(head) {

    const arr = []

    while (head !== null) {
        arr.push(head)
        head = head.next
    }
    const end = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        const random = randomRange(0, end)
        console.log('打乱的随机序号', random);
        [arr[i], arr[random]] = [arr[random], arr[i]]
    }

    for (let i = 0; i <= end; i++) {
        arr[i].next = arr[i + 1] ? arr[i + 1] : null
    }
    console.log('最终打乱出来的结果1', arr);
    console.log('最终打乱出来的结果2', arr.map(item => item.val));
    return arr[0]
}
const newList = {}
newList.head = rndomList(list._head)

export default newList