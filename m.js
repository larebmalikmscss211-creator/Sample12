// let sName="Student1";
// console.log("Student Name is"+sName);
// let num=1;
// let bool=true;
// console.log("Number value is "+num+" \nBoolean value is "+bool);
// let weather="Rainy"; 
// if(weather=="Sunny"){
//  console.log("Enjoy");
//  }
//  else if(weather=="Rainy"){
//  console.log("Enjoy!");
//  }
//  else{
// console.log("Rainy today")
//  }



//  Simple Calculator
// Ask the user for two numbers and an operator (+, -, *, /).
// Use if–else to perform and print the correct result.


function calculator(){
 let fNum=prompt("Enter First Number ");
let sNum=prompt("Enter Second Number");
let cFNum=Number(fNum);
let cSNum=Number(sNum);

let oprtr=prompt("Enter Operator");


if(oprtr=="+"){
 alert("Sum is "+(cFNum+cSNum));
}
else if(oprtr=="-"){
 alert("Difference is "+(cFNum-cSNum));
}
else if(oprtr=="*"){
 alert("Product is "+(cFNum*cSNum));
}
else if(oprtr=="/"){
 alert("Quotient is "+(cFNum/cSNum));
}
else{
    alert("Enter valid Number or operator")
}
}
 

function greet(name){
    alert("Hello "+name+"!");
}
s=prompt("Enter your name")
greet(s);