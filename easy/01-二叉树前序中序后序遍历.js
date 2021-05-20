// function removeRepetition(nums) {
//   if (!nums.length) return 0;
//   let write = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[write] !== nums[i]) {
//       write++;
//       nums[write] = nums[i]
//     }
//   }
//   return write+1
// }
// console.log(removeRepetition([1,2,3,-1,-2,9]))
//前序遍历
var preorderTraversal = function (root) {
  let arr = []
  let handleObj = (root) => {
    if (root) {
      arr.push(root.val)
      handleObj(root.left)
      handleObj(root.right)
    }
  }
  handleObj(root)
  return arr
};
//中序遍历
var inorderTraversal = function (root) {
  let arr = []
  let handleObj = (root) => {
    if (root) {
      handleObj(root.left)
      arr.push(root.val)
      handleObj(root.right)
    }
  }
  handleObj(root)
  return arr
};
//后序遍历
var postorderTraversal = function (root) {
  let arr = []
  let handleObj = (root) => {
    if (root) {
      handleObj(root.left)
      handleObj(root.right)
      arr.push(root.val)
    }
  }
  handleObj(root)
  return arr
};
//广度优先
var levelOrder = function (root) {
  let arr = [];
  let arr1 = [root]
  while (arr1.length > 0) {
    let arr2 = []
    let arr3 = []
    new Array(...arr1).forEach(res => {
      arr1.shift()
      res && arr2.push(res.val)
      res && res.left && arr3.push(res.left)
      res && res.right && arr3.push(res.right)
    })
    arr2.length && arr.push(arr2)
    arr1 = arr3
  }
  return arr
};