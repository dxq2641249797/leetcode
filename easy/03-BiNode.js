var convertBiNode = function(root) {
    if(!root) return null;
    let preNode = new TreeNode(0);
    //用于存放最后的结果
    let dummyRoot = preNode;
    function dfs(root){
        if(!root) return null;
        //中序遍历 ,左-根-右
        dfs(root.left);
        //将当前结点的左子节点置空
        root.left = null;
        //将上一个结点的由结点指向当前结点
        preNode.right = root;
        //上一个结点下移到当前结点
        preNode  =root;
        dfs(root.right)
    }
    dfs(root);
    return dummyRoot.right;
};
