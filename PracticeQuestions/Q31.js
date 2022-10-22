let a3 = [1 , 2, 3, 4, 90, 10]
const filter_func = (num) =>{
return num%10 == 0
}
let b = a3.filter(filter_func)
console.log(b)