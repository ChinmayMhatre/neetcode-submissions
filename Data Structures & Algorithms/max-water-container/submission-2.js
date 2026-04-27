class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1
        let max = 0;
        while (l<r){
            let height
            if(heights[l]>heights[r]){
                height= heights[r]
            }else{
                height = heights[l]
            }
            let area = (r-l)* height
            if (area>max) max= area
            if(heights[l]<heights[r]){
                l++
            }else{
                r--
            }
        } 
        return max
    }
}
