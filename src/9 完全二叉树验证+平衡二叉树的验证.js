import list from './list'
import constructorTree from './tree'

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
const arr = [5, 1, 4, null, null, 3, 6]
const tree = constructorTree(arr)
console.log('tree', arr, constructorTree(arr));
// 完全二叉树验证
function isValid(root) {
    if (root === null) return true
    const queue = []
    let islast = false
    queue.unshift(root)
    while (queue.length > 0) {
        const node = queue.pop()
        if (node.left === null && node.right !== null) return false
        if (islast && (node.left !== null || node.right !== null)) return false
        if (node.left === null || node.right === null) {
            islast = true
        }

        if (!islast && node.left !== null) {
            queue.unshift(node.left)
        }
        if (!islast && node.right !== null) {
            queue.unshift(node.right)
        }
    }
    return true
}
// console.log('root', root,);

// console.log('sssss', isValid(root));
// 平衡二叉树的验证
var isBalanced = function (root) {
    // 二叉树的递归套路  可以明确函数的定义是做什么的 
    //然后最终结果可不可以通过左右子节点得到想要的值
    function process(root) {

        if (root === null) return {
            bool: true,
            height: 1
        }

        const leftInfo = process(root.left)
        const rightInfo = process(root.right)

        const bool = leftInfo.bool && rightInfo.bool && (Math.abs(leftInfo.height - rightInfo.height)) < 2
        return {
            bool,
            height: leftInfo.height > rightInfo.height ? leftInfo.height + 1 : rightInfo.height + 1
        }
    }
    return process(root).bool
};
// console.log('ssss', isBalanced(tree));

// 二叉搜索树验证 递归训练写法
// 明确一下左树和右树需要给你什么
var isValidBST = function (root) {
    function returnProcess(root) {
        if (root === null) return null

        const leftData = returnProcess(root.left)
        const rightData = returnProcess(root.right)

        let min = root.val
        let max = root.val

        if (leftData !== null) {
            min = leftData.min > min ? min : leftData.min
        }
        if (rightData !== null) {
            max = rightData.max < max ? max : rightData.max
        }
        let isBst = true

        if ((leftData !== null) && (!leftData.isBst || leftData.max >= root.val)) {
            isBst = false
        }

        if ((rightData !== null) && (!rightData.isBst || rightData.min <= root.val)) {
            isBst = false
        }
        return {
            isBst,
            min,
            max
        }
    }
    return returnProcess(root).isBst
};

console.log('isValidBST', isValidBST(tree));
