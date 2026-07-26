class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let score = []
        for(let i = 0 ; i <= operations.length -1 ; i++){
            if(!isNaN(operations[i])){
                score.push(Number(operations[i]))
            }
            else if(operations[i] === '+'){
                let p1 = score[score.length-1]
                let p2 = score[score.length-2]
                score.push(p1+p2)
            }
            else if(operations[i] === 'D'){
                let p1 = score[score.length-1]
                score.push(p1*2)
            }
            else if(operations[i] === 'C'){
                score.pop()
            }
        }
        return score.reduce((prev,val)=>{return Number(prev)+Number(val)}, 0)
    }
}
