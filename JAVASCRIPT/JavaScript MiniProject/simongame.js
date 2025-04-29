let gameseq = [];
let userseq = [];

let btns = ["yellow","red","green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

 // step 1 = keypress ->game started 
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is started");
        started = true;

        levelup();
    }
    
});

function gameflash(btn){  // white color kr deta h  first time m 
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){  // green color kr deta h user 
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}


// random button flash karega and levelup ho jayega
function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    // random button ko flash karenge 
    let randmIdx = Math.floor(Math.random()*3);
    let randcolor = btns[randmIdx]; 
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);

    gameflash(randbtn); // onclicking 
}


function  checkAns(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length === gameseq.length){
            setTimeout(levelup,500);
        }
    }
    else{
        h2.innerHTML = ` Game Over! Your Score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnpress(){
    let btn = this;// this ->clicked button 
    userflash(btn);  // this clicked button

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkAns(userseq.length-1);
    
      
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level =0;
}