// Q10 write a JS program to find whether a number is divisible by 2 & 3
let num = prompt("Enter a number");
num = parseInt(num);

if(num % 2 == 0 && num % 3 == 0){
    alert("Number is Divisible by 2 & 3 both.");

}
else{
    alert("Number is not divisible by  2 or 3 or both.");
}
