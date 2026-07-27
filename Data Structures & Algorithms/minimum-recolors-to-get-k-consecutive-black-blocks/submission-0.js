class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */


    minimumRecolors(blocks, k) {
        let left = 0
        let currentW = 0;
        // Initial window of size k
        for (let i = 0; i < k; i++) {
            if (blocks[i] === 'W') currentW++;
        }

let minW = currentW;

for (let i = k; i < blocks.length; i++) {
    // To remove the element that is falling out of the window:
if (blocks[i - k] === 'W') {
    currentW--;
}

// To add the new element entering the window:
if (blocks[i] === 'W') {
    currentW++;
}
minW = Math.min(currentW, minW)
}
return minW

    }
}