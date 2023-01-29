/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--) {
        // 如果不是9 直接加一后 返回
        if(digits[i] !== 9) {
            digits[i]++;
            return digits;
        }
        // 如果是 9, 置为0
        digits[i] = 0;
    }
    // 仍然进位的话，就在数组最前面补1
    digits.unshift(1);
    return digits;
};

// 题解
// 只要倒序遍历数组，判断数组的后一位，1.如果不是9，那么直接加一，就可以。 2.如果是9,那么加一之后肯定会变成零。如果遍历完还没结束，说明数组给的都是9，之前在数组最前面加个即可。
// 时间复杂度 O(n). 只做了一次遍历。
// 空间复杂度 O(1).