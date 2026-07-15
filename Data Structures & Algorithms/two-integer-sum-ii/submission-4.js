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
            let sum = numbers[l] + numbers[r]
            if(sum == target){
                res.push(l+1)
                res.push(r+1)
                break
            }
            if(sum<target){
                l++
            }
            if(sum > target){
                r--
            }
        }
        return res
    }
}
