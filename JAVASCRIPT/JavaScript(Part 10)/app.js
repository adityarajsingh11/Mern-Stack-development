//# onclick 
// let btn = document.querySelector("button");
// console.dir(btn);

// // btn.onclick = function(){
// //     console.log("Button was clicked");
// // }

// btn.onclick = function(){
//     alert("hello!");
// }

// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     btn.onclick = sayhello;
// }

// function sayhello(){
//     alert("hello!");
// }

//# onmouseenter
// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     btn.onclick = sayhello;
//     btn.onmouseenter = function(){
//         console.log("You entered a button");
//     }
// }

// function sayhello(){
//     alert("hello!");
// }

//# Event Listener
// let btns = document.querySelectorAll("button");
// for(btn of btns){
//         // btn.addEventListener("click",sayhello);
//         // btn.addEventListener("click",sayName);
//         btn.addEventListener("dblclick",function(){
//             console.log("You double clicked me");
//         });
        
//     }
//     function sayhello(){
//         alert("hello!");
//     }
//     function sayName(){
//         alert("apna college");
//     }

//# EventListner for the paragarph
// let para = document.querySelector("p");
// para.addEventListener("click",function(){
//     console.log("Para was clicked");
// });

//# this in eventListener
// let btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     console.dir(this);
//     this.style.backgroundColor = "pink";
// });

// If i want to change color of para ,heading,button simultaneously without writting the same code again and again
// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");

// function changeColor(){  // to apply for all 
//     console.dir(this.innerText);
//     this.style.background = "pink";
// }

// btn.addEventListener("click",changeColor);

// h1.addEventListener("click",changeColor);

// h3.addEventListener("click",changeColor);

// p.addEventListener("click",changeColor);

//# Keyboard Events 
// let btn = document.querySelector("button");
// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button clicked");
// });
// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("button clicked");
// });

// let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(){
//     console.log("Key was pressed");
// });
// let inp = document.querySelector("input");
// inp.addEventListener("keyup",function(event){
//     console.log("key = ",event.key);
//     console.log("code = ",event.code)
//     console.log("Key was released");
// });

// ArrowUp(U),ArrowDown(D),ArrowLeft(L),ArrowRight(R)
// let inp = document.querySelector("input");

// inp.addEventListener("keydown",function (event){
//     console.log("code = ",event.code);
//     if(event.code = "keyU"){
//         console.log("character moves up");
//     }
//     else if(event.code = "keyD"){
//         console.log("character moves down");
//     }
//     else if(event.code = "keyL"){
//         console.log("character moves left");
//     }
//     else if(event.code = "keyR"){
//         console.log("character moves right");
//     }
// });

// Form event 
// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     //console.log("Form Submitted");
//     alert("Form Submitted");

// });

// Extraction Form Data
// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){// event ->submit
//     event.preventDefault();

//     let inp = document.querySelector("input");
//     console.dir(inp);
//     console.log(inp.value);
// });

// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){// event ->submit
//     event.preventDefault();
//     console.dir(form);

//     let user = document.querySelector("#user");  // this.element[0];
//     let passs = document.querySelector("#pass");  // this.element[1];

//     console.log(user.value);
//     console.log(passs.value);

//     alert(`Hi ${user.value} , your password is to ${passs.value}`);
    
// });

//# change event
// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){// event ->submit
//     event.preventDefault();
   
// });

// let user = document.querySelector("#user");

// user.addEventListener("change",function(){
//     console.log("change event");
//     console.log("final value = ",this.value);  // this->user 
// });
// user.addEventListener("input",function(){
//     console.log("input event");
//     console.log("final value = ",this.value);  // this->user 
// });

// writing automatically in the paragraph by writing inside the input 
let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input",function(){
    console.log(inp.value);
    p.innerText = inp.value;
})