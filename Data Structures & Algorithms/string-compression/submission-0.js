class Solution {
    /**
     * @param {character[]} chars
     * @return {number}
     */
    compress(chars) {
        let left = 0 
        let valPoint = 0
        for(let r = 0 ; r <= chars.length ; r++){
            if(r === chars.length || chars[left] !== chars[r]){
                let length = (r - left)
                chars[valPoint] = chars[left]
                valPoint++
                if (length > 1){
                    let lstr = length.toString()
                    for (let char of lstr) {
                        chars[valPoint] = char
                        valPoint++
                    }
                }
                left = r
            }
        }
        return valPoint
    }
}
