const mongoose = require("mongoose");
main()
   .then(() => {
    console.log("connection successful");
   })
   .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String
    },
    price:{
        type:Number,
        min : [1,"price must be greater than 0"],
    
    },
    discount:{
        type:Number,
        default:0,
    },
    category: {
        type:String,
        enum : ["fiction","non-fiction"],
    },
    genre : [String]
});

const Book = mongoose.model("Book",bookSchema);

Book.findByIdAndUpdate("67ff54f79c14806c54ebdcaf",{price : -50},{runValidators:true})
.then((res) => {
    console.log("data updated successfully",res);
}).catch((err) => {
    console.log("error",err.errors.price.properties.message);
});

// let book1 = new Book({
//     title:"Marvel comics version 2.0",
//     price: 600,
    
//     genre:["action","adventure","comedy"],
// });
// book1.save().then((res) => {
//     console.log("data saved successfully",res);
// }).catch((err) => {
//     console.log("error",err);
// })