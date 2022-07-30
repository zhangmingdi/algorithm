import list from './list'
import constructorTree, { findNodeIntree } from './tree'

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const root = new TreeNode(
    1, new TreeNode(2, new TreeNode(4, null, null), null), new TreeNode(
        3, null,
        null
    )
)
const arr = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]
const tree = constructorTree(arr)
const p = findNodeIntree(tree, 5)
const q = findNodeIntree(tree, 1)
console.log('tree', arr, constructorTree(arr),);
console.log('treeFind', arr, findNodeIntree(tree, 5), findNodeIntree(tree, 1));

// 构建每个节点的父节点的哈希表
function recorderFather(head, hashMap) {
    if (head === null) return
    head.left && hashMap.set(head.left, head)
    head.right && hashMap.set(head.right, head)
    recorderFather(head.left, hashMap)
    recorderFather(head.right, hashMap)
}

// 寻找二叉树的最近公共祖先 哈希表法（不知道为什么力扣会出现栈溢出）
var lowestCommonAncestor0 = function (root, p, q) {
    const hashMap = new Map()
    const hashSet = new Set()
    hashMap.set(root, root)
    //记录所有节点的父节点
    recorderFather(root, hashMap)
    let current = p
    // 记录p节点的轨迹
    while (current !== hashMap.get(current)) {
        hashSet.add(current)
        current = hashMap.get(current)
    }
    hashSet.add(root)
    // 寻找q节点与p节点相交点
    while (!hashSet.has(q)) {
        q = hashMap.get(q)
    }
    return q
};
// console.log('ssss', lowestCommonAncestor(tree, p, q));

//// 寻找二叉树的最近公共祖先 递归法，  每棵树 希望它返回p或者q节点，有汇聚点就返回汇聚点，其它的返回null
var lowestCommonAncestor = function (root, p, q) {
    // 每棵树 希望它返回p或者q节点，没的话返回null
    if (root === null) return null
    if (root === q) return root
    if (root === p) return root

    let leftNode = lowestCommonAncestor(root.left, p, q)
    let rightNode = lowestCommonAncestor(root.right, p, q)

    // 啥都没有就返回null
    if (leftNode === null && rightNode === null) return null

    // 汇聚点的判断
    if (leftNode !== null && rightNode !== null) return root

    // 当汇聚点与null节点的判断
    return leftNode ? leftNode : rightNode

};
console.log('ssss', lowestCommonAncestor(tree, p, q));
