class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if (intervals.length === 0) return [];
        intervals.sort((a, b) => a[0] - b[0]);
        let ans = []
        let [low, high] = intervals[0];
        for (let i = 1; i < intervals.length; i++){
            let interval = intervals[i];
            if(interval[0] <= high){
                high = Math.max(high, interval[1]);
            } else {
                ans.push([low,high]);
                low = interval[0];
                high = interval[1];
            }

        }
        ans.push([low,high])
        return ans
    }

}