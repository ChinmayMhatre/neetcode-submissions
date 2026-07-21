class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) this.keyStore.set(key, []);
        this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let arr = this.keyStore.get(key);
        if (!arr) return "";
        let l = 0 
        let r = arr.length - 1
        let res = "";
        while (l <= r){
            let mid = Math.floor((l+r)/2)
            if(arr[mid][1] === timestamp){
                return arr[mid][0]
            }
            if(arr[mid][1] < timestamp){
                res = arr[mid][0];
                l = mid + 1 
            }
             if(arr[mid][1] > timestamp){
                r = mid - 1 
            }
        }
        return res
    }
}