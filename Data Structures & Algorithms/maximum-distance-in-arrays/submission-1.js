class Solution {
    /**
     * @param {number[][]} arrays
     * @return {number}
     */
    maxDistance(arrays) {
        let res = 0
        let max = arrays[0][arrays[0].length-1]
        let min = arrays[0][0]

        for(let i = 1; i <=arrays.length-1;i++){
            let curMin = arrays[i][0]
            let curMax = arrays[i][arrays[i].length-1]
            
            res = Math.max(res, Math.abs(curMax - min), Math.abs(max - curMin))

            max = Math.max(max,curMax)
            min = Math.min(min,curMin)
        }
       
       return res

    }
}
