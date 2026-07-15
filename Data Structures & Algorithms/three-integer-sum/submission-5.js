class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
     const sorted = nums.sort((a, b) => a - b)
     const res = []
     for (let i = 0 ; i < sorted.length - 2;i++){
        let l = i+1
        let r = sorted.length - 1
        if(sorted[i] == sorted[i-1]){
            continue
        }
        while(l<r){
            let sum = sorted[i]+sorted[l]+sorted[r]
            //console.log(`sorted ${sorted}, ${sorted[i]},${sorted[l]},${sorted[r]}sum:${sum}`)
            if(sum == 0){
                res.push([sorted[i],sorted[l],sorted[r]])
                l++
                r--
                while(sorted[l] == sorted[l-1]){
                    l++
                }
                while(sorted[r] == sorted[r+1]){
                 r--
                }
            }
            if(sum < 0){
                l++
                while(sorted[l] == sorted[l-1]){
                    l++

                }
            }
            if(sum > 0){
                r--
                while(sorted[r] == sorted[r+1]){
                 r--
                }
            }
        }
     }
     return res
    }
}