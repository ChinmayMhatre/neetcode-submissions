class Solution {
    /**
     * @param {number[]}
     * @return {number[]}
     */
    sortedSquares(nums) {
        let left = 0;
        let right = nums.length - 1;
        let p = nums.length - 1;
        const result = new Array(nums.length);

        while (left <= right) {
            const leftSquare = nums[left] * nums[left];
            const rightSquare = nums[right] * nums[right];
            if (leftSquare > rightSquare) {
                result[p] = leftSquare;
                left++;
            } else {
                result[p] = rightSquare;
                right--;
            }
            p--;
        }
        return result;
    }
}