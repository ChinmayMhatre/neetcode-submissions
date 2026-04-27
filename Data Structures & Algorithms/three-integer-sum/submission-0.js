class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sorted = nums.sort((a, b) => a - b)
        const res = []
        for (let i = 0; i < sorted.length; i++) {
            if (i > 0 && sorted[i] === sorted[i - 1]) {
                continue
            }
            let l = i + 1
            let r = sorted.length - 1
            while (l < r) {
                const sum = sorted[i] + sorted[l] + sorted[r]
                if (sum > 0) {
                    r--
                } else if (sum < 0) {
                    l++
                } else if (sum === 0) {
                    res.push([sorted[i], sorted[l], sorted[r]])
                    l++
                    while (sorted[l] === sorted[l - 1] && l < r) {
                        l++
                    }
                }

            }
        }
        return res
    }
}