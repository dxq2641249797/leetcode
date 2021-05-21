var maxDepth = function (root) {
  if (!root) return 0
  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1)
};

var isSymmetric = function (root) {
  function handleObj(left, right) {
      if (left == null && right == null) return true
      if (left == null || right == null) return false
      return (left.val == right.val)
          && handleObj(left.left, right.right)
          && handleObj(left.right, right.left)
  }
  return handleObj(root, root)
};

const log = console.log.bind(console)
var hasPathSum = function (root, targetSum) {
    if (!root) return false
    let arr = []
    function handleObj(root, targetSum) {
        if ((!root && targetSum !== 0)||(root.left==null&&root.right==null)) {
            arr.push(targetSum+root.val)
            return
        }
        targetSum += root.val
        if (root.left && !root.right) {
            handleObj(root.left, targetSum)
            return
        }
        if (root.right && !root.left) {
            handleObj(root.right, targetSum)
            return
        }
        handleObj(root.left, targetSum)
        handleObj(root.right, targetSum)
    }
    handleObj(root, 0)
    log(arr)
    return arr.filter(res => res == targetSum).length > 0
};