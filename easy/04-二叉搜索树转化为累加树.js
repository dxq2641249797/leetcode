var bstToGst = function (root) {
    if (!root) return root;
    let val = 0
    function handleObj(root) {
        if (!root) return null
        root && handleObj(root.right)
        val+=root.val
        root.val = val;
        root && handleObj(root.left)
    }
    handleObj(root)
    return root
};
