//# for methode of Array 
// let arr = [1,2,3,4,5];

// // let print = function(el){
// //     cosole.log(el);
// // };
// // arr.forEach(print);

// arr.forEach(function(el){
//     console.log(el);
// })

//# for for object 
// let arr = [{
//     name: "aditya",
//     marks:95,
// },{
//     name: "bittu gandu",
//     marks: 100,
// },{
//     name: "prem chinnar",
//     marks:90,
// }];

// arr.for((student) => {
//     console.log(student.name)
// });

//# Map function 
// let num = [1,2,3,4,5];
// let double = num.map((el) => {
//     return el * el;
// });
// console.log(double);

// let student  = [{
//         name: "aditya",
//         marks:95,
//     },{
//         name: "bittu gandu",
//         marks: 100,
//     },{
//         name: "prem chinnar",
//         marks:90,
//     }];
// // gpa function to convert from percentage into gpa 
// let gpa = student.map((el) => {
//     return el.marks / 10;
// });
// console.log(gpa);

//# filter function 
// let num = [1,2,3,4,5,6,7,8,9,10];
// let ans = num.filter((el) => {
//     return el % 2 ==0; // even->true ans odd->false 
// });
// console.log(ans);

//# Every function 
// let ans = [2,4,6,8].every((el) => {
//     return el%2==0;
// });
// console.log(ans);

//# some function 
// let ans = [1,2,4,6,8].some((el) => {
//         return el%2==0;
//     });
// console.log(ans);

//# reduce function 
// let num = [1,2,3,4,5];
// let finalval = num.reduce((res,el) =>{
//     console.log("result:",res);
//     return res + el;
// });
// console.log(finalval);

//# finding the maximum in the array
// method 1 by using loop 
// let arr = [ 1,3,5,6,2,44,65];
// let max = -1;
// for(let i =0;i<arr.length;i++){
//     if(max < arr[i]);
//     max = arr[i];
// }
// console.log(max);

// method 2 by using reduce function 
// let arr = [ 1,3,5,6,2,44,65];
// let max = arr.reduce((max,el) =>{
//     if(max < el){
//         return el;
//     }
//     else{
//         return max;
//     }
// });
// console.log(max);

// Practice question 1  check multiple of 10
// let arr = [10,20,40,30,50];
// let ans = arr.every((el) => {
//     return el % 10 == 0;
// });
// console.log(ans);

// practice question 2 minimum element   
// let arr = [2,77,5,6,4,8,9,1];
// let min = arr.reduce((min,el) => {
//     if(min < el){
//         return min;
//     }
//     else{
//         return el;
//     }
// });
// console.log(min);
    
//# default parameter
// function sum(a,b=2){
//     return a+b;
// }
// let ans = sum(2);
// console.log(ans);

// #spread 
// let arr = [1,3,5,8,9,0];
// console.log(Math.min(...arr));
// console.log(...arr);
// console.log(..."apnacollege");

//# spread with array literals 
// let arr = [2,4,7,9,0];
// let newarr = [...arr];
// console.log(newarr);

// let char = [..."hello"];
// console.log(char);

//# spread with object literals  object-> key:value pair m hota 
// const data = {
//     email: "9555adityarajsingh@gmail.com",
//     marks: 89,
// };
// const datacopy = {...data,id:69,county:"Pakisthan"};
// console.log(datacopy);

// let arr = [3,6,8,0,8];
// let arrcopy = {...arr};
// console.log(arrcopy);

//# concept of Rest in JS
// function sum(...args){
//     // arguments
//     for(let i =0;i<args.length;i++){
//         console.log("you gave us:",args[i]);
//     }
// }
// sum(1,2,3,4);

// function sum(...args){
//     return args.reduce((sum,el) => sum+el);
// }
// console.log(sum(1,4,5,6,7,4));

// function min(...args){
//     return args.reduce((min,el) => {
//         if(min > el){
//             return el;
//         }
//         else{
//             return min;
//         }
//     });
// }
// console.log(min(2,3,41,5));

//# Destructuring 
// let names = ["tony","bruce","peter","steve"];
// // let winner = names[0];
// // let runner = names[1];
// // let secondrunner = names[2];

// let [winner,runner,secondrunner] = names;
// console.log(`winner: ${winner}`)

//# Destructuring with object 
const student = {
    name:"aditya",
    age: 14,
    class:9,
    subjects: ["hindi",'english',"math"],
    username:"@adi677168",
    password: "bkl",

};
// let {username ,password} = student;
// console.log(`username: ${username}`);
let {username: user,password,city = "mumbai"} = student;  // storing in another variable 
console.log(`username of student is: ${user}`);
