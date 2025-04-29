//# Async Function 
// async function greet(){
//     throw "some random color";
//     return "asmita";
// }
// greet()
// .then((result) => {
//     console.log("promise was resolved");
//     console.log("result was :",result);

// })
// .catch((err) => {
//     console.log("Promise was rejected err: ",err);
// })

//#Await keyword
// function getNum(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*10) +1;
//             console.log(num);
//             resolve();
//         },1000);
//     })
// }
// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//      getNum();
    
// }

// using await to changecolor(in java script 11)
// let h1 = document.querySelector("h1");
// function changecolor(color,delay) {
//     return  new Promise ((resolve,rejed) => {
//         setTimeout(() =>{
//             h1.style.color = color;
//             console.log(`color changed to ${color}`);
//             resolve("change color!");
//         },delay);
        
//     });
// }

// async function demo(){
//     await changecolor("red",1000);
//     await changecolor("orange",1000);
//     await changecolor("green",1000);
//     changecolor("blue",1000);
// }

// #handling rejections with await keyword
// let h1 = document.querySelector("h1");
// function changecolor(color,delay) {
//     return  new Promise ((resolve,reject) => {
//         setTimeout(() =>{
//             let num = Math.floor(Math.random()*5) + 1;
//             if(num > 3){
//                 reject("promise rejected");
//             }
//             h1.style.color = color;
//             console.log(`color changed to ${color}`);
//             resolve("change color!");
//         },delay);
        
//     });
// }

// async function demo(){
//     try{
//         await changecolor("red",1000);
//         await changecolor("orange",1000);
//         await changecolor("green",1000);
//         changecolor("blue",1000);
//     }
//     catch(err){
//         console.log("error caught:",err);
//     }
//     let a = 5;
//     console.log(a);
//     console.log(a+3);
// }

// JSON
// let jsonRes = '{"fact":"A cat lover is called an Ailurophilia (Greek: cat+lover).","length":57}';
// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

//# Our first API
// let url = "https://catfact.ninja/fact";

// fetch(url) // return promise in the form of response
// .then((res) => {
//     return res.json();
    
// })
// .then((data) => {
//     console.log("data1:",data.fact);
//     return fetch(url);
// })

// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("data2:",data2.fact);
// })
// .catch((err) => {
//     console.log("ERROR -",err);
// });
// console.log("I am Happy");

//# using fetch with async-await

let url = "https://catfact.ninja/fact"; // we can resolve the error using try and catch
async function  getfacts() {
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
    
    }
    catch(err){
        console.log("error - ",err);
    }
   console.log("bye");
}