import constructorTree, { findNodeIntree } from './tree'

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const arr = [1, 2, 3, null, null, 4, 5]
const tree = constructorTree(arr)
// const p = findNodeIntree(tree, 5)
// const q = findNodeIntree(tree, 1)
console.log('tree', arr, constructorTree(arr),);
// console.log('treeFind', arr, findNodeIntree(tree, 5), findNodeIntree(tree, 1));

// 二叉树的序列化
var serialize = function (root) {
    if (root === null) return "#_"
    let str = root.val + "_"
    str += serialize(root.left)
    str += serialize(root.right)
    return str
};


const serializeStr = serialize(tree)

// 二叉树的反序列化
var deserialize = function (data) {
    const arr = data.split('_')
    console.log('arr', arr);
    let index = 0
    function doDeserialize(arr) {
        const nodeVal = arr[index]
        index++
        if (nodeVal === '#') return null
        const node = new TreeNode(nodeVal)
        // debugger
        node.left = doDeserialize(arr)
        node.right = doDeserialize(arr)
        return node
    }
    return doDeserialize(arr)
};

console.log('deserialize', deserialize(serializeStr));
