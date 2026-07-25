class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {
        let max = -1
        let map = new Map()
        for (let i = 0 ; i < arr.length; i++){

          map.set(arr[i], (map.get(arr[i]) || 0) + 1)
        }

     map.forEach((freq, num) => {
    if (freq === num) {
        max = Math.max(max, num)
    }
})
        
        return max
    }
}
