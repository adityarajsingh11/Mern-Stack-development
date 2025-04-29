// function in JS

// function hello(){
//     console.log("hello");
// }

// function printName(){
//     console.log("apna college");
//     console.log("Aditya raj singh");
// }

// function print1to5(){
//     for(let i = 1;i<=5;i++){
//         console.log(i);
//     }
    
// }

// function isAdult(){
//     let age = 18;
//     if(age >=18){
//         console.log("person is adult");
//     }
// }

// //hello();
// //printName();
// //print1to5();
// isAdult();

// practice question of rolling dice
// function dice(){
//     let rand = Math.floor(Math.random()*6) +1;
//     console.log(rand);
// }

// dice();

// function with argument 
// function PrintInfo(name,age){
//     console.log(`My name is ${name} and age is ${age}`);
// }
// PrintInfo("aditya",19);

// function to sum 
// function sum(a,b){
//     console.log(`sum is ${a+b}`);
// }
// sum(2,5);

// function to find average
// function average(a,b,c){
//     console.log(`average is ${(a+b+c)/3}`);
// }
// average(2,3,1);

// multiplication of number 
// function table(n){
//     console.log(`Table of ${n}`);
//     for(let i =1;i<=10;i++){
        
//         console.log(n*i);
//     }
// }
// table(3);

// return statement 
// function sum(a,b){
//         return a+b;
//     }

// console.log(sum(2,5));

// function isAdult(age){
//     if(age>=18){
//         return "Adult";
//     }
//     else{
//         return "Not Adult";
//     }
// }
// console.log(isAdult(18));

// practice question sum of number from 1 to n;
// function summation(n){
//     let sum =0;
//     for(let i =1;i<=n;i++){
//         sum = sum +i;
//     }
//     return sum;
// }
// console.log(summation(10));

// Practice question to concate the string in the string
// let str = ["hi","hello","bye","sonu"];
// function concate(str){
//     let result = "";
//     for(let i =0;i<str.length;i++){
//         result = result +str[i];
//     }
//     return result;
// }
// console.log(concate(str));

// function scope in javascript
// let sum = 29; // global scope 
// function calsum(a,b){
//     let sum = a+b;  // function scope 
//     console.log(sum); // access only inside the function 
// }
// calsum(1,2);

// Block scope in Javascript
// let age = 23;
// if(age>=18){
//     let str = "is Adult" ; // block scope
//     console.log(str); // acces inside the block only
// }
// console.log(str); // not access from outside the block

// Lexical scope in Javascript
// function outerfunc(){
//     let x = 5;  
//     let y = 6;
//     function innerFunc(){  // function scope
//         console.log(x);
//     }
//     innerFunc();
// }

// Practice question 
// let greet = "hello";
// function changeGreet(){
//     let greet = "namaste";
//     console.log(greet);
//     function innergreet(){
//         console.log(greet);
//     }
//     innergreet();
// }
// console.log(greet);
// changeGreet();

// function Expression in JS
// const sum = function(a,b){
//     return a+b;
// }
// sum(2,3);
// we can also update the value of function
// let hello = function(){
//     console.log("hello");
// }
// hello = function(){
//     console.log("namaste");
// }
// hello();

// Higher Order functions
// function multiplegreet(func,count){  // pass function and count which u want to print 
//     for(let i =1;i<=count;i++){
//         func();
//     }
// }
// let greet = function(){ // function to print value 
//     console.log("hello");
// }
// multiplegreet(greet,4);

// Higher Order Function(OddEven Test)
// function OddOrEvenFactory(request){
//     if(request == "odd"){
//         let odd = function(n){
//             console.log(!(n%2 == 0));
//         }
//        return odd;
//     }
//     else if(request == "even"){
//         let even = function(n){
//             console.log(n%2 == 0);
//         }
//        return even;
//     }
//     else{
//         console.log("wrong request");
//     }
// }
// let request = "odd"; // even
// let func = OddOrEvenFactory(request);
// console.log(func(2));

// methods in JS
const calculator = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }

}
console.log(calculator.add(2,3));
console.log(calculator.sub(3,1));
console.log(calculator.mul(4,3));