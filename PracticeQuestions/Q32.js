let arr = [1, 2, 3, 4, 5]
let a = arr.map(function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
})
console.log(a)