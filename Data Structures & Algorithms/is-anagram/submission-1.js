class Solution {
  isAnagram(s, t) {
    if (s.length !== t.length) return false
    const map1 = new Map()
    const map2 = new Map()


    for (let i = 0; i < s.length; i++) {
        let val1 = (map1.get(s[i]) || 0) + 1
        map1.set(s[i], val1)
        let val2 = (map2.get(t[i]) || 0) + 1
        map2.set(t[i], val2)
    }
    
    for (let [key, value] of map1) {
        if (map2.get(key) !== value) return false
    }
    return true
  }
}