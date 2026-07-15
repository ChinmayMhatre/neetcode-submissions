class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0
        let r = heights.length-1
        let max = 0
        while(l<r){
            if(heights[l]<heights[r]){
                let area = (r-l) * heights[l]
                max = Math.max(max,area)
                l++
            }else{
                let area = (r-l) * heights[r]
                max = Math.max(max,area)
                r--
            }
        }
        return max
    }
}
