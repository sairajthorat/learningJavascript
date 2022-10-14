//write a JS program to find whether a number is divisible by either 2 or 3

let num = prompt("Enter a number");
num = parseInt(num);

if(num % 2 == 0){
    alert("Number is Divisible by 2 .");

}
if (num % 3 == 0){
    alert("Number is divisible by 3");
}
else{
    alert("Number is not divisible by 2 and 3 both.");
}
