class Solution {
    /**
     * @param {number[][]}
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let lout = 0
        let rout = matrix.length - 1

        let hasvalue = (arr,val)=>{
            let l = 0
            let r = arr.length - 1

            while (l<=r){
                let mid = Math.floor((l+r)/2)
                if (val === arr[mid]){
                return true
                }
                if (val < arr[mid]){
                    r = mid - 1 
                }
                if (val > arr[mid]){
                    l = mid + 1 
                }
            }
            return false

        }

        while(lout <= rout){
            let mid = Math.floor((lout + rout) / 2)
            let midlength = matrix[mid].length - 1
            if(matrix[mid][0]<= target && target <= matrix[mid][midlength]){
            if(hasvalue(matrix[mid],target)){
                return true
            }
            }
            if( target < matrix[mid][0] ){
                rout = mid - 1
            } else {
                lout = mid + 1
            }
        }
        return false

    }
}
