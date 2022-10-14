// if else

let a = prompt("Hey!,What's your age ?")
a = Number.parseInt(a);
if(a<0){
  alert("this is invalid age");
}
else if(a<9){
  alert("You are kid ");
}
else if(a<18 && a>=9){
  alert("you can think of driving after 18");
}
else{
  alert("you can now drive");
}