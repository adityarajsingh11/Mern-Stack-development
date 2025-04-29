const mongoose = require("mongoose");
const Chat = require("./models/chat");

//connection setup
main().then(() => {console.log("connection successful")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/watsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

let allchats = [
    {
        from : "neha",
        to : "priya",
        msg : "send me your exam sheets",
        created_at : new Date(), // new Date() is a function that returns the current date and time
    },
    {
        from : "neha",
        to : "priti",
        msg : "send me your roll number",
        created_at : new Date(), 
    },
    {
        from : "prem",
        to : "bittu",
        msg : "bittu gandu hai",
        created_at : new Date(), 
    },
    {
        from : "prem",
        to : "aryan",
        msg : "you are professional muthal",
        created_at : new Date(), 
    },
    {
        from : "bittu",
        to : "prem",
        msg : "prem chinnar hai",
        created_at : new Date(), 
    },
]
Chat.insertMany(allchats);
    
