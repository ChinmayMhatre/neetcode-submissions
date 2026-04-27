class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
  const map = new Map();

  for (const s of strs) {
    const counts = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      counts[s.charCodeAt(i) - 97]++;
    }
    const key = counts.join('#');
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(s);
  }

  return Array.from(map.values());
}

}
