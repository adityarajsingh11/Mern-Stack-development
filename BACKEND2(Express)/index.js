const express = require("express");
const app = express();

//console.dir(app);

let port = 8080;

app.listen(port ,() => {
    console.log(`app is listening on port ${port}`);
});

// app.use((req,res) => {
//     console.log(req);
//     console.log("request received");
//     //res.send("this is a basic response");
//     res.send({
//         name:"apple",
//         color:"red",
//     })
// });

//# app.get(routing)
app.get("/", (req,res) => {
    res.send("you contracted root path");
});

// app.get("/apple", (req,res) => {
//     res.send("you contracted apple path");
// });

// app.get("/orange", (req,res) => {
//     res.send("you contracted orange path");
// });

// app.get("*", (req,res) => {   // ( error aa rha code m due to node js ke karan isliye niche wla used kiya missing path ke liye )
//     res.send("This path does not exist.");
// });

// handling the error (missing the path)
// app.use((req, res) => {
//     res.status(404).send("This path does not exist.");
// });

// app.post("/",(req,res) => {
//     res.send("you sent a post request to root");
// });

//# Path Parameter
app.get("/:username/:id",(req,res) => {
    let { username ,id } = req.params; 
    let htmlstr = `<h1>Welcome to the page of @${username}!</h1>`;
    res.send(htmlstr);
})

// # Query String 
app.get("/search", (req,res) => {
    let {q} = req.query;
    if(!q){
        res.send("<h1>nothing search</h1>")
    }
    res.send(`<h1>search result for query: ${q}</h1>`);
});