import list from './list'
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const root = new TreeNode(
    1, null, new TreeNode(
        2, new TreeNode(3, null, null),
        null
    )
)

// 验证二叉搜索树 （递归） 中序遍历是顺序即可
var isValidBST0 = function (root) {
    //前一个值无限小
    let prevalue = -Infinity

    function doIsBST(root) {
        if (root === null) return true
        const isBST = doIsBST(root.left)
        if (prevalue >= root.val || !isBST) return false
        prevalue = root.val
        return doIsBST(root.right)

    }
    return doIsBST(root)
};
// 验证二叉搜索树 （遍历）就是中序遍历是顺序即可
var isValidBST = function (root) {
    let stack = []
    let prevalue = -Infinity
    while (stack.length !== 0 || root !== null) {
        while (root !== null) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        if (root.val <= prevalue) return false
        prevalue = root.val
        root = root.right
    }

    return true
};