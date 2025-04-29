const  express = require("express");
const  app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema} = require("./schema.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"

main().then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.log("Error connecting to MongoDB", err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}



app.set("view engine" , "ejs");
app.set("views" ,path.join(__dirname , "views"));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate); // Use ejs-mate as the template engine
app.use(express.static(path.join(__dirname , "public")));


app.get("/",(req,res) => {
    res.send("Hi I am root");
});

const validateListing = (req,res,next) => {
    let {error} = listingSchema.validate(req.body);
    
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400,error)
    }else {
        next();
    }
}

//Index Route
app.get("/listings" , wrapAsync(async(req,res) => {
    const allListings = await Listing.find({});
    console.log(allListings);
    
    res.render("listings/index.ejs" , {allListings})
}));

//New Route
app.get("/listings/new",(req,res) => {
    res.render("listings/new.ejs");
});

//Show Route
app.get("/listings/:id",wrapAsync(async(req,res) => {
    let {id} = req.params;
    const listing  = await Listing.findById(id);
    res.render("listings/show.ejs" , {listing});

}));

// Create Route
app.post("/listings",
    validateListing,
    wrapAsync(async(req,res,next) => {
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");
    
    
}));


//Edit Route
app.get("/listings/:id/edit",
    validateListing,
    wrapAsync(async(req,res) => {
    let {id} = req.params;
    const listing  = await Listing.findById(id);
    res.render("listings/edit.ejs" , {listing});
}));

// Update Route
app.put("/listings/:id",wrapAsync(async(req,res) => {
    if(!req.body.listing){
        throw new ExpressError(400,"Send valid data for listing");
       }
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id , {...req.body.listing});// deconstructing the object
    res.redirect(`/listings/${id}`);
}));

// Delete Route
app.delete("/listings/:id",wrapAsync(async(req,res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}));

// app.get("/testListing" , async(req,res) => {
//     let sampleListing = new Listing({
//         title : "My new Villa",
//         description : "By the beach",
//         price : 1200,
//         location : "Goa",
//         country : "India",
//     });

//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing");
// });

// app.all("*" ,(req,res,next) => {
//     next(new ExpressError(404,"Page not Found!"));
// });

// defining the middlewares
app.use((err,req,res,next) => {
    // Log the error stack for debugging
    console.error(err.stack);
    let {statusCode = 500, message = "Something went wrong"} = err;
    res.status(statusCode).render("error.ejs",{message});
    //res.status(statusCode).send(message);
});

app.listen(8080 , () => {
    console.log("Server is running on port 8080");
});