const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// middlewares -> response send
// app.use((req,res,next) => {
    
//     console.log("Hi,I am 1 middlewares");
//     next(); // call next middleware or route handler
    
// });

// app.use((req,res,next) => {
    
//     console.log("Hi,I am 2 middlewares");
//     next(); // call next middleware or route handler
// });


const token = (req,res,next) => { // middlewares for specific route
    let {token} = req.query;
    if(token === "giveaccess"){
        next(); 
    }
    throw new ExpressError(401,"ACCESS DENIED");
};

app.get("/api",token , (req,res) => {
    res.send("data");

});

app.get("/",token, (req, res) => {
    res.send("Hi ,I am root");
});

app.get("/random" ,(req,res) => {
    res.send("Hi ,I am random");
});

//logger - morgan
// app.use((req,res,next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// });


app.get("/err",(req,res) => {
    abcde =abcde; // this will throw an error
});

app.get("/admin" , (req,res) => {
    throw new ExpressError(401,"Access to admin is forbidden"); 
});

app.use((err,req,res,next) => {
    let {status = 500 ,message = "Some Error Occured"} = err;
    res.status(status).send(message);
    // res.status(500).send("Something went wrong"); // default error message
});




// 404 
// app.use((req,res) => {
//     res.send("404 page not found");
// });





app.listen(8080 ,() => {
    console.log("Server is running on port 8080");
});