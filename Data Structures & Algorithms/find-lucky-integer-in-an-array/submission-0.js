class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {
        let max = -1
        let map = new Map()
        for (let i = 0 ; i < arr.length; i++){
            let curr = 0 
            if(map.has(arr[i])){
                curr = map.get(arr[i])
            }
            map.set(arr[i],curr + 1)
      
        }

        map.forEach((key,val)=>{
            if(key === val){
                max = Math.max(max,val)
            }
        })
        
        return max
    }
}
