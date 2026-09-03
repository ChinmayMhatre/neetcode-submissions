class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals){
        let sorted = intervals.sort((a,b)=> a[0]-b[0])
        let [low,high] = sorted[0]
        let ans = []
        for(let i = 1 ; i < sorted.length; i++){
            if(sorted[i][0] <= high){
                high = Math.max(high,sorted[i][1])
            }else{
                ans.push([low,high])
                low = sorted[i][0]
                high = sorted[i][1]
            }

        }
        ans.push([low,high])
        return  ans
    }

}