class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const res = []
        let l = 0
        let r = numbers.length - 1
        while(l<r){
            const sum = numbers[l] + numbers[r]
            if (sum > target){
                r--
            }
            else if (sum < target){
                l++
            }
            else {
                res.push(l+1)
                res.push(r+1)
                break
            }

        } 
        return res
    }
}
