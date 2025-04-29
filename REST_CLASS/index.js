const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

const { v4: uuidv4 } = require('uuid'); //require  id
const methodOverride = require("method-override"); // for using put and delete method in form
app.use(methodOverride("_method")); // this will look for _method in the form and override the method

app.use(express.urlencoded({extended:true}));
app.use(express.json()); // Add this middleware to parse JSON data

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {   
        id:uuidv4(),
        username : "apnacollege",
        content : "I love coding!"
    },
    {   
        id:uuidv4(),
        username : "adityasingh",
        content : "Hard work is important to achieve success"
    },
    {   
        id:uuidv4(),
        username : "rahulkumar",
        content : "I got selected for my !st intership!"
    },
]

app.get("/posts",(req,res) => {
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res) => {
    res.render("new.ejs"); // form aa gya 
});

app.post("/posts",(req,res) => {
    let {username,content} = req.body;
    //when creating new post then also creating new id 
    let id = uuidv4();
    posts.push({ id , username , content});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res) => {
    let {id} = req.params;  // retrieve id 
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs",{ post });
});

app.patch("/posts/:id",(req,res) => {
    let {id} = req.params;  // retrieve id 
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts"); // redirect to the posts page after updating
});

app.get("/posts/:id/edit",(req,res) => {
    let {id} = req.params;  // retrieve id 
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs",{ post });
});
app.delete("/posts/:id",(req,res) => {
    let {id} = req.params;  // retrieve id 
    posts = posts.filter((p) => id !== p.id); // filter out the post with the given id
    res.redirect("/posts"); // redirect to the posts page after deleting
});

app.listen(port,() => {
    console.log("Listening to port : 8080");
});