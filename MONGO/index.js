const mongoose = require("mongoose");
main()
   .then(() => {
    console.log("connection successful");
   })
   .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
});

const User = mongoose.model("User",userSchema);

User.findByIdAndDelete("67fe5816bffb76675d9f08e8").then((res) => {
    console.log("data deleted successfully",res);
});

// User.findOneAndUpdate({name:"Bruce"},{age : 35},{new : true})
//   .then((res) => {
//     console.log("data updated successfully",res);
// })
//   .catch((err) => {
//     console.log("error",err);
// });

// User.findById("67fe7d071e05815761136f4b").then((res) => {
//     console.log("data fetched successfully",res);
// }).catch((err) => {
//     console.log("error",err);
// });

//const Employee = mongoose.model("Employee",userSchema);

// User.insertMany([
//     {name:"Tony", email: "tony@gmail.com",age:30},
//     {name:"Peter", email: "Peter@gmail.com",age:38},
//     {name:"Bruce", email: "bruce@gmail.com",age:40},
//     {name:"adam", email: "adam@gmail.com",age:50}
// ]).then((res) => {
//     console.log("data saved successfully",res);
// });

// const User1 = new User({name : "aditya",email : "aditya@gamil.com",age : 19});

// User1.save();

// const User2 = new User({name : "aryan",email : "aryan@gamil.com",age : 20});

// User2
//   .save()
//   .then((res) => {
//     console.log("data saved successfully",res);
//   })
//   .catch((err) => {
//     console.log("error",err);
//   });