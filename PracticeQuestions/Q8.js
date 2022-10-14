// Q8 use logical oprators to find whether the age of person lie between 10 to and 20

console.log("Program will tell you,you are applicable or not ?")
let age = prompt("Enter your age")
age = Number.parseInt(age);
if(age<20 && age>10){
  alert("You are applicable.");
}
else{
  alert("You are not applicable.")
}