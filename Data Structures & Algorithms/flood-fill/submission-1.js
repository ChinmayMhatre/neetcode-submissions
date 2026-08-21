class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        let original = image[sr][sc]
        if (original === color) return image;
        let rows = image.length
        let cols = image[0].length
        const dfs = (r,c) =>{
        if(Math.min(r,c) < 0 ||
        r >= rows ||
        c >= cols ||
        image[r][c] !== original
        ){
            return
        }
        image[r][c] = color
            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);

        }
        dfs(sr,sc)
        return image
    }
}