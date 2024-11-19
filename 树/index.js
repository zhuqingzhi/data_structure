/* 
    二叉查找树
    构建：
    设根节点为当前节点
    如果根节点不存在那么就设置节点为根节点
    parent=current
    while(true)比较当前节点和插入节点的大小
    如果小于当前节点
    prarent=parent.left
    if(parent.left===null)parent.left=n;
    break;
    如果大于当前节点
    prarent=parent.right
    if(parent.right===null)parent.right=n;
    break;


    查找：


*/

class Node{
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
    // 显示节点数据
    show() {
        return this.data;
    }
}

class BST{
    constructor() {
        this.root = null;
    }
    insert(data) {
        var n = new Node(data, null, null);
        if (this.root === null) {
            this.root = n;
        } else {
            var current = this.root;
            var parent = null;
            while (true) {
                parent = current;
                if (data < parent.data) {
                    current = current.left;
                    if (current === null) {
                        parent.left = n;
                        break;
                    } else {
                        current = current.right;
                        if (current === null) {
                            parent.right = n;
                            break;
                        }
                    }
                }
            }
        }
    }
    inOrder(node) {
        if(node!==null){
            this.inOrder(node.left)
            console.log(node.show() + ' ')
            this.inOrder(node.right)
        } 
    }
}
const bst = new BST();
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
