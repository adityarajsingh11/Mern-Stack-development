const express = require("express");
const app = express();
const path = require("path");

const port = 8080;
// express require ejs internally

app.use(express.static(path.join(__dirname,"public/css"))); // public ke saari file ejs ko available hogi
app.use(express.static(path.join(__dirname,"public/js")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/", (req,res) => {
    res.render("home.ejs");
});

// app.get("/ig/:username", (req,res) => {
//     let {username} = req.params;
//     res.render("instragram.ejs" ,{username});
// });

// # loop in ejs
// app.get("/ig/:username", (req,res) => {
//     const follower = ["aditya" ,"sumit","shubham","dilip"];
//     let {username} = req.params;
//     res.render("instragram.ejs" ,{username,follower});
// });

//# instraagram page with ejs
app.get("/ig/:username", (req,res) => {
    let {username} = req.params;
    const instaData = require("./data.json");  // require data file 
    const data = instaData[username];
    // check for the valid data
    if(data){
        res.render("instragram.ejs" ,{data});
    }
    else{
        res.render("error.ejs");
    }
    
});



app.get("/hello", (req,res) => {
    res.send("hello");
});

app.get("/rolldice", (req,res) => {
    let diceval = Math.floor(Math.random() * 6) + 1 ;
    res.render("rolldice.ejs",{diceval});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});