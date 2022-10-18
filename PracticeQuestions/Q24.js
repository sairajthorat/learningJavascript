//extract the amount out of this string 
//"please give RS 1000"

let str = "please give RS 1000"
let amount = Number.parseInt(str.slice(15))
console.log(amount)
console.log(typeof amount)