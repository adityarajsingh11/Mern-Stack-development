//# selectingElementByClass
// let smallImages = document.getElementsByClassName("oldImg");
// for(let i =0;i<smallImages.length;i++){
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of image number ${i} is changed`);
// }

//# querySelector 
// console.dir(document.querySelector("h1"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelectorAll("p"));

// console.dir(document.querySelectorAll(" div a"));

//# Using Properties and Method
// let para = document.querySelector('p');
// console.log(para);
// console.log(para.innerText = "abc");
// console.log(para.innerText = "Hi, I am the peter parker ");
// // if I want to change the style i.e. in bold then used innerHTML
// console.log(para.innerHTML = "Hi, I am <b>Peter Parker</b>")

// let heading = document.querySelector('h1');
// console.log(heading.innerText);
// //console.log(heading.innerHTML = "<u>Spider Man</u>");
// console.log(heading.innerHTML = `<u>${heading.innerText}</u> `);

//# manipulating Attributes
// let img = document.querySelector('img');
// console.log(img.getAttribute('id'));

// // change the id attribute
// img.setAttribute('id','spidermanImg');
// console.log(img.getAttribute('id'));

// img.setAttribute('src','assets/creation_3.jpeg');  // change the spider man image
// console.log(img.getAttribute('src'));

//#Manipulating Style
// let heading = document.querySelector('h1');
// console.log(heading.style);
// //changing the properties of heading 
// console.log(heading.style.color = 'red');

// changing the anchor tag 
// let links = document.querySelectorAll(".box a"); // using class selector
// // for(let i =0;i<links.length;i++){  // method 1
// //     links[i].style.color = "green";
// // }
// for(link of links){
//     link.style.color = "purple";  // inline property
// }

//# Manipulating style by using classList 
// let img = document.querySelector('img');
// console.log(img.classList);
// let heading = document.querySelector('h1');
// console.log(heading.classList);
// console.log(heading.classList.add("green"));
// console.log(heading.classList.add("underline"));
// console.log(heading.classList.remove("green"));

//# Navigation 
// let h4 = document.querySelector('h4');
// console.log(h4.parentElement);
// let div = document.querySelector('div');
// console.log(div.children);
// console.log(div.childElementCount);
// let img = document.querySelector('img');
// console.log(img.previousElementSibling);

//# Adding element
// let newpara = document.createElement('p');
// console.log(newpara);
// newpara.innerText = "Hi! I am adding a new Para";
// let body = document.querySelector('body');// insert element inside body tag
// body.appendChild(newpara);  // add at the bottom of document
// newpara.append(" Bittu gandu hai");
// newpara.prepend("Prem chinnar hai ");

// Adding element by using insertAdjacent
let btn = document.createElement('button');
btn.innerText = "NEW BUTTON";
let para = document.querySelector('p');
para.insertAdjacentElement("beforebegin",btn);
let body = document.querySelector('body');
body.removechild(btn);