const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");
const methodOverride = require("method-override"); 

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true})); // to parse the data from the form
app.use(methodOverride("_method")); // to use put and delete method in the form


main().then(() => {console.log("connection successful")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/watsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Index route
app.get("/chats", async(req,res) => {
    let chats = await Chat.find(); // to get all data from the collection(chat)
    //console.log(chats);
    res.render("index.ejs",{chats});
})

//New Route
app.get("/chats/new", (req,res) => {
    res.render("new.ejs");
});

// Create Route 
app.post("/chats", (req,res) => {
    let {from ,to ,msg} = req.body; // destructuring the data from the request body 
    let newchat = new Chat({
      from : from,
      to : to,
      msg : msg,
      created_at : new Date(),
    });

    newchat
      .save()
      .then((res) => {
        console.log("chat was saved successfully");
    }).catch((err) => {
        console.log(err);
      });

    res.redirect("/chats");
});

//Edit Route
app.get("/chats/:id/edit",async(req,res) => {
  let {id} = req.params; // destructuring the id from the request params
  let chat = await Chat.findById(id);
  res.render("edit.ejs",{chat});
});

// Update Route
app.put("/chats/:id",async(req,res) => {
  let {id} = req.params;
   let { msg : newmsg } = req.body;
   let updatedchat = await Chat.findByIdAndUpdate(
    id, 
    {msg : newmsg},
    {runValidators : true , new:true}
  );
  console.log(updatedchat);
  res.redirect("/chats");
});

// Delete Route
app.delete("/chats/:id",async(req,res) => {
  let {id} = req.params;
  let deletedchat = await Chat.findByIdAndDelete(id);
  console.log(deletedchat);
  res.redirect("/chats");
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

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

