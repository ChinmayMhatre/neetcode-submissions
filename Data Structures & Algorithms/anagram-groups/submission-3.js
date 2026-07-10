class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    const map = new Map()

    for (let str of strs){
        const key = Array(26).fill(0)
        let codeA = 'a'.charCodeAt(0)
        for (let s of str){
            let val = s.charCodeAt(0) - codeA
            key[val]++
        }
        let strKey = key.join(',')
        if (!map.has(strKey)){
            map.set(strKey,[])
        }
            const val = map.get(strKey)
        val.push(str)

    }
    return Array.from(map.values())
}

}
