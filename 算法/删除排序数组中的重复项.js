// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

// 示例 1：
// 输入：nums = [1,1,2]
// 输出：2, nums = [1,2]
// 解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。

// 示例 2：
// 输入：nums = [0,0,1,1,1,2,2,3,3,4]
// 输出：5, nums = [0,1,2,3,4]
// 解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }

    var count = 0;
    for (let right = 1; right < nums.length; right++) {
        if (nums[right] == nums[right - 1]) {
            //如果有重复的，count要加1
            count++;
        } else {
            //如果没有重复，后面的就往前挪
            nums[right - count] = nums[right];
        }

    }

    return nums.length - count;
};

let arr = [1, 1, 2];
console.log('[1,1,2]的新长度： ' + removeDuplicates(arr));
console.log('[1,1,2]新： ' + arr);

let arr1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log('[0,0,1,1,1,2,2,3,3,4]的新长度： ' + removeDuplicates(arr1));
console.log('[0,0,1,1,1,2,2,3,3,4]新： ' + arr1);