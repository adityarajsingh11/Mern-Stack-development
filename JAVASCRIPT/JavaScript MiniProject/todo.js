let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = ""; // reset the value after printing 
});

// here we can delete the existing item i.e. jo phele se h wali sirf delete honge naye wale nhi
// let delBtns = document.querySelectorAll('.delete');  // delete class 
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         console.log("element deleted");
//         par.remove();
//     })
// }

// here to delete naya wale element then apply on ul
ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        console.log(listItem);
        listItem.remove();
        console.log("deleted");
    }
    
   
})