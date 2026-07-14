class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        const output = []
        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        const buckets = new Map()
        for (let[key,value] of map.entries()){
        if (!buckets.has(value)) {
          buckets.set(value, []);
         }
        buckets.get(value).push(key);
        }
        let bucketLength = nums.length
        while (bucketLength > 0 && output.length < k ){
            let value = buckets.get(bucketLength)
            if(!value){
                bucketLength --
                continue
                
            }
            output.push(...value)
            bucketLength --
        }
        return output
    }
}
