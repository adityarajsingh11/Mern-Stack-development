//# Call stack(Asynchronous nature)
// function hello(){
//     console.log("function inside hello function ")
//     console.log("hello");
// }
// function demo(){
//     console.log("function inside demo fnx");
//     hello();
// }
// console.log("I am calling the the function ");
// demo();
// console.log("calling done");

//#settimeout (Asynchronous nature)
// setTimeout(() => {
//     console.log("apna college");
// },2000);
// console.log("hello...");

//# Callback Hell
let h1 = document.querySelector("h1");
// function changecolor(color){
//     h1.style.color = color;
// }
// setTimeout(changecolor("red"),1000);

// setTimeout(changecolor("orange"),2000);

// setTimeout(changecolor("green"),3000);

//# method 2 callback hell ->callback nesting 
// function changecolor(color,delay,nextcolorchange){
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextcolorchange) nextcolorchange();  // if exist then change 
//     },delay);
// }

// changecolor("red",1000,() => {
//     changecolor("purple",1000,() => {
//         changecolor("green",1000);
//     });
    
// });

//# Promises (Promises improved  to callback hell)
// function savetoDb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()* 10) +1;
//     if(internetSpeed > 4){
//         success();
//     }
//     else{
//         failure();
//     }
// }
// savetoDb("apna college",
//     () => {
//         console.log("succes:Your data was saved");
//         savetoDb("hello world!",
//             () => {
//                 console.log("success2: data is save");
//             },
//             () => {
//                 console.log("failure2: data is not save");
//             }
//         );
//     },
//     () => {
//         console.log("failure:weak connection data not saved");
//     }
// );
//# Promise(resolve and reject)  and (then and catch)
// function savetoDb(data){

//     return new Promise((resolve,reject) => {
//         let internetSpeed = Math.floor(Math.random()* 10) +1;
//         if(internetSpeed > 4){
//             resolve("success : data was saved");
//         }
//         else{
//             reject("failure: data was not saved");
//         }

//     });
// }

// let request = savetoDb("apna college"); // req = promise object 
// request.then(() => {
//     console.log("promise was resolved");
//     console.log(request);
// })
// .catch(() => {
//     console.log("promise was rejected");
//     console.log(request);
// });


// Refactoring the old code (h1)
function changecolor(color,delay) {
    return  new Promise ((resolve,rejed) => {
        setTimeout(() =>{
            h1.style.color = color;
            resolve("change color!");
        },delay);
        
    });
}
changecolor("red",1000)
.then(() =>{
    console.log("red color was completed");
    return changecolor("orange",1000);
})
.then(() =>{
    console.log("orange color was completed");
    return changecolor("blue",1000);
})
.then(() =>{
    console.log("blue color was completed");
    return changecolor("green",1000);
})
.then(() =>{
    console.log("green color was completed");
});








