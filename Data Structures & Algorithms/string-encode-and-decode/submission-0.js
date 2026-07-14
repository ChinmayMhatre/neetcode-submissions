class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
       let output = ''
       for (let str of strs){
         output = output.concat(`${str.length}#${str}`)
       }
       return output
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
       let output = []
       let i = 0
       while(i < str.length){
          let length = ''
          while (str[i] != '#'){
            length = length.concat(str[i])
            i++
          }
          if(str[i] == '#'){
            i++
          }
          let stroutput = ''
          let len = Number(length)
          for(let j = 0 ; j < len; j++){
            stroutput = stroutput.concat(str[i])
            i++
          }
          output.push(stroutput)
       }
       return output
    }
}