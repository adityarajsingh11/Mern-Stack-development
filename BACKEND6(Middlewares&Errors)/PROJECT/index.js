const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");
const methodOverride = require("method-override"); 
const ExpressError = require("./ExpressError.js"); // custom error handling class

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true})); // to parse the data from the form
app.use(methodOverride("_method")); // to use put and delete method in the form


main().then(() => {console.log("connection successful")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Index route
app.get("/chats", async(req,res) => {
  try{
    let chats = await Chat.find(); // to get all data from the collection(chat)
    res.render("index.ejs",{chats});
  }catch(err){
    next(err);
  }
    
});

//New Route
app.get("/chats/new", (req,res) => {
  // throw new ExpressError(404,"page not found"); // to throw a custom error
    res.render("new.ejs");
});

// Create Route 
app.post("/chats", async(req,res,next) => {
  try{
    let {from ,to ,msg} = req.body; // destructuring the data from the request body 
    let newChat = new Chat({
      from : from,
      to : to,
      msg : msg,
      created_at : new Date(),
    });
    await newChat.save(); // to save the data in the collection(chat)
    res.redirect("/chats"); // to redirect to the index route after saving the data

  } catch(err){
    next(err);
  }
});

// dont need to try catch block
function asyncWrap(fn){
  return function(req,res,next){
    fn(req,res,next).catch(err => next(err));
  }
}

// NEW - show route 
app.get("/chats/:id", asyncWrap(async(req,res,next) => {
  
    let {id} = req.params; 
    let chat = await Chat.findById(id);
    if(!chat){  // handling the async errror if the id is not found in the collection
      next( new ExpressError(500,"chat not found")); // to throw a custom error
    }
    res.render("edit.ejs",{chat});
    
}));

//Edit Route
app.get("/chats/:id/edit",asyncWrap(async(req,res) => { // asyncwrap handling the error
  
    let {id} = req.params; // destructuring the id from the request params
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
}));

// Update Route
app.put("/chats/:id",asyncWrap(async(req,res) => {
    let {id} = req.params;
    let { msg : newmsg } = req.body;
    let updatedchat = await Chat.findByIdAndUpdate(
     id, 
     {msg : newmsg},
     {runValidators : true , new:true}
   );
   console.log(updatedchat);
   res.redirect("/chats");
  
}));

// Delete Route
app.delete("/chats/:id",async(req,res) => {
  try{
    let {id} = req.params;
    let deletedchat = await Chat.findByIdAndDelete(id);
    console.log(deletedchat);
    res.redirect("/chats");
  }catch(err){
    next(err);
  }
  
});

// let chat1 = new Chat({
//     from : "neha",
//     to : "priya",
//     msg : "send me your exam sheets",
//     created_at : new Date(), // new Date() is a function that returns the current date and time
// });
//  chat1.save().then((res) => {
//     console.log(res)
//  });

app.get("/", (req, res) => {
  res.send("root is working");
});

const handleValidationErr = (err) => {
  console.log("This was a Validation error.Please follow rules");
  console.dir(err.message);
  return err;
}

app.use((err,req,res,next) => {
  console.log(err.name);
  if(err.name === "ValidationError"){
    err = handleValidationErr(err);
  }
  next(err);
})

// error handling middleware
app.use((err, req, res, next) => {
  const { status = 500 , message = "Some error Occured" } = err;
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

