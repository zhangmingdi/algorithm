import list from './list'

// 二叉树先序遍历 非递归版
var preorderTraversal0 = function (root) {
    var list = []
    var stack = []
    while (root != null || stack.length > 0) {
        while (root !== null) {
            list.push(root.val)
            stack.push(root)
            root = root.left
        }
        //弹出来之后直接判断右边，然后继续压栈
        root = stack.pop()
        root = root.right
    }
    return list
};

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

// 二叉树先序遍历 左神版 非常容易理解
var preorderTraversal1 = function (root) {
    if (root === null) return root
    const stack = []
    const list = []
    stack.push(root)
    // 每次都弹出一个都先压右再压左
    while (stack.length > 0) {

        const node = stack.pop()
        list.push(node.val)
        if (node.right !== null) {
            stack.push(node.right)
        }
        if (node.left !== null) {
            stack.push(node.left)
        }
    }
    return list
};
// console.log('ssss', preorderTraversal(root));

// 二叉树的后续遍历 自己的做法 
var postorderTraversal2 = function (root) {
    const list = []
    const stack = []

    while (stack.length > 0 || root !== null) {

        while (root !== null) {
            //通过记录num来判断是第几次访问
            root.num = 1
            stack.push(root)
            root = root.left
        }
        // 回溯的时候不要弹出来
        root = stack[stack.length - 1]
        if (root.num === 2) {
            const node = stack.pop()
            node.num = undefined
            list.push(node.val)
            root = null
        } else {
            // 记下来第二次访问，下次可以直接弹出来
            root.num = 2
            root = root.right
        }
    }
    return list
};


// 二叉树的后续遍历 双栈
var postorderTraversal3 = function (root) {
    const stack = []
    const backStack = []
    const list = []
    if (root === null) return list
    stack.push(root)
    while (stack.length > 0) {
        const node = stack.pop()
        backStack.push(node)
        //注意哦是先压左再压右哦
        if (node.left !== null) {
            stack.push(node.left)
        }
        if (node.right !== null) {
            stack.push(node.right)
        }

    }
    while (backStack.length > 0) {
        list.push(backStack.pop().val)
    }
    return list
};

// 二叉树中序遍历 非递归版
var preorderTraversal0 = function (root) {
    var list = []
    var stack = []
    while (root != null || stack.length > 0) {
        while (root !== null) {
            stack.push(root)
            root = root.left
        }
        // 第一次弹出来就是中序遍历
        root = stack.pop()
        list.push(root.val)
        root = root.right
    }
    return list
};

// 中序遍历 左神
var inorderTraversal = function (root) {
    const list = []
    const stack = []

    while (root !== null || stack.length > 0) {
        // 有左一直压左
        if (root !== null) {
            stack.push(root)
            root = root.left
        } else {
            // 到尽头就可以弹出 ，继续压弹出来的右
            root = stack.pop()
            list.push(root.val)
            root = root.right
        }
    }

    return list

};