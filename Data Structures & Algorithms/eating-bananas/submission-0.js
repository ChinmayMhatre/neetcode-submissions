class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        let lo = 1
        let hi = Math.max(...piles)

    const feasible = (piles,k,h)=>{
        let hours = 0
        for(let pile of piles){
            hours = hours + Math.ceil(pile/k)
        }
        return hours <= h
    }

        while(lo<hi){
            let mid = Math.floor((lo + hi)/2)
            if(feasible(piles,mid,h)){
                hi = mid
            }else{
                lo = mid + 1
            }
        }
        return lo
    }

    feasible(piles,k,h){
        let hours = 0
        for(pile of piles){
            hours = hours + Math.ceil(pile/k)
        }
        return hours <= h
    }
}
