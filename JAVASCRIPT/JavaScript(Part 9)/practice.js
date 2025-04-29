// Practice Question 
//1 a<p> with red text that says "Hey i am red!"
let para1 = document.createElement("p");
para1.innerText = "Hey I am red!";
document.querySelector("body").append(para1);
para1.classList.add("red");

// 2 an <h3> with blue text that says "I am blue h3!"
let para2 = document.createElement("h3");
para2.innerText = "Hey I am h3";
document.querySelector("body").append(para2);
para2.classList.add("blue");

// 3 a <div> with a black border and pink background color with the following element inside of it
// * another <h1> that says "I am a div"
// * that says "ME TOO"
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para3 = document.createElement("p");
h1.innerText = "I am in a div";
para3.innerText = "ME TOO";
div.append(h1);
div.append(para3);
div.classList.add("box");
document.querySelector("body").append(div);
document.querySelector("body").prepend(div);

