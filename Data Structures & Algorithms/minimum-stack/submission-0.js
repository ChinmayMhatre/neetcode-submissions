class MinStack {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let prevMin = this.stack.length === 0 ? val : this.stack[this.stack.length - 1][1]
        let currentMin = Math.min(val,prevMin)
        this.stack.push([val,currentMin])
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
    }

    /**
     * @return {number} body
     */
    top() {
        return this.stack[this.stack.length - 1][0]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length - 1][1]
    }
}