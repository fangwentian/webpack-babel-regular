var math = {
    add(a, b) {
        return a + b;
    },
    minus(a, b) {
        return a - b;
    },
    plus(a, b) {
        return a * b;
    },
    divide(a, b) {
        return b === 0 ? 0 : a / b; 
    }
}
module.exports = math;