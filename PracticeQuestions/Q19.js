// Q19 write a program to print the marks of students in an object using for loop
//obj{Harry 98 
//    rohan 70
//    aakash 7}

let marks = {
    Harry: 98, 
    rohan:70,
    aakash: 7,
}

for(let i=0;i<Object.keys(marks).length;i++){
    console.log("the marks of "+Object.keys(marks)[i]+"are" + mark[Object.keys(marks)[i]])
}