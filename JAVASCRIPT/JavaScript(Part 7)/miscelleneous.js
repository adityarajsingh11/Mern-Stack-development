// Arrow function in JS
// const sum = (a,b) => {
//     console.log(a+b);
// }
// const cube = (n) => {
//     console.log(n*n*n);
// }

//Implicit return in Arrow function 
// const sum = (a,b) =>(
//     a+b
// );

// setTimeout function 
// console.log("Hi there!");
// setTimeout( () =>{
//     console.log("Apna college");
// },4000);
// console.log("Welcome to");

// setInterval function
// console.log("Hi there!");
// let id = setInterval ( () => {
//     console.log("Apna college");
// },2000);
// console.log(id);

// console.log("Hi there!");
// let id2 = setInterval ( () => {
//     console.log("coder army");
// },3000);
// console.log(id2);

// this with Arrow Function 
// const student = {
//     name:"aman",
//     marks:95,
//     prop: this,  // global scope
//     getName: function(){
//         console.log(this);
//         return this.name;  // here this->student
//     },
//     getMarks: () => {
//        console.log(this); // parent's scope->window(global scope)
//        return this.marks;   // here this->parent scope = window
//     },
//     getInfo1: function(){
//         setTimeout( ()=>{
//             console.log(this);  // student 
//         },2000);
//     },
//     getInfo2: function(){
//         setTimeout(function(){
//             console.log(this);  // window
//         },2000);
//     } 

// };
// console.log(student.getInfo1());
// console.log(student.getInfo2());

// practice question 
// const square = (n) =>{
//     return n*n;
// }
// console.log(square(2));

// practice question 
let id = setInterval( ()=>{
    console.log("Hello World");
}, 2000);
setTimeout( () => {  // after 10sec 5 times "hello world" printed
    clearInterval(id);
    console.log("clear interval ran")
},10000);
