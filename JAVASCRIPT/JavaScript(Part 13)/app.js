// axios (make http request)
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let fact = await getfacts();  // return promise becoz getfacts() is async function
//     console.log(fact);
//     let p = document.querySelector("#result"); // id of p
//     p.innerText = fact;  // para mai add kiya fact->getfact();
// });

// let url = "https://catfact.ninja/fact"; 

// async function  getfacts() {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }
//     catch(err){
//         console.log("error - ",err);
//         return "No fact found";
//     }
// }

//# DogPicture API
// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async () => {
//     let link = await getImage();
//     //console.log(link);
//     let img = document.querySelector("#result");
//     img.setAttribute("src",link);
//     console.log(link);
// });


// async function  getImage() {
//     try{
//         let res = await axios.get(url2);
//         return res.data.message;
//     }
//     catch(err){
//         console.log("error - ",err);
//         return "No Image found";
//     }
// }

// Header with API
// const url = "https://icanhazdadjoke.com/";

// async function getJokes(){
//     try{
//         const config = { headers: {Accept: "application/json"}};
//         let res = await axios.get(url,config);
//         console.log(res.data);

//     }
//     catch(err){
//        console.log("ERROR - ",err);
//     }
// }

// Updating Query string 
let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click",async () => {
    let country = document.querySelector("input").value;
    console.log(country);

    let colleges = await getcollege(country);
    //console.log(colleges);
    Show(colleges);
});

function Show(colleges){
    let list = document.querySelector("#list");
    list.innerText = "";  // initially list is empty
    for(col of colleges){
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getcollege(country){
    try{
        
        let res = await axios.get(url + country);
        return res.data;
    }
    catch(err){
        console.log("error : ",err);
        return [];
    }

    
}