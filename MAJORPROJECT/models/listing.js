const mongoose = require("mongoose");

main().then((res)=>{
    console.log("database connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}


const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    description : String,
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        set: (v) =>
            v === ""
                ? "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
                : v,
    },
    price : Number,
    location : String,
    country : String,
});

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;