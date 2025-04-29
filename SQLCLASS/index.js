const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true})); // for parsing application/x-www-form-urlencoded
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

// Create the connection to database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "@Adi677168#"
});

let getRandomUser = () => {
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password(),
    ];
};

// Home route
app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try {
    connection.query(q,(err,result) => {
        if(err) throw err;
        let count = result[0]["count(*)"];
        res.render("home.ejs",{count})
        
    });
    } catch(err){
      console.log(err);
      res.send("Error in fetching data from database");
    }
});

// show route
app.get("/user", (req,res) => {
    let q = `SELECT * FROM user`;
    try {
        connection.query(q,(err,users) => {
            if(err) throw err;
            
            //res.send(users);
            res.render("showuser.ejs" , {users});
            
        });
    } catch(err){
          console.log(err);
          res.send("Error in fetching data from database");
        }
});

// Edit route
app.get("/user/:id/edit", (req,res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q,(err,result) => {
            if(err) throw err;
            let user = result[0];
            res.render("edit.ejs",{user});
           
            
        });
    } catch(err){
          console.log(err);
          res.send("Error in fetching data from database");
        }
});

// Update (database) route
app.patch("/user/:id",(req,res) => {
    let {id} = req.params;
    let {password: FormPass , username : newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q,(err,result) => {
            if(err) throw err;
            let user = result[0];
            if(FormPass != user.password){
                res.send("Incorrect password");
            }else{
                let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
                connection.query(q2,(err,result) => {
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
            
           
            
        });
    } catch(err){
          console.log(err);
          res.send("Error in fetching data from database");
        }
});

app.listen("8080", () => {
    console.log("Server is running on port 8080");
});

//  // Inserting data into the database
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// // let users = [["123b","123_newuserb","abc@gmail.comb","abcb"],
// // ["123c","123_newuserc","abc@gmail.comc","abcc"]];

// let data = [];
// for (let i = 1; i <= 100; i++) {
//     data.push(getRandomUser());  // 100 random users
// }

// try {
//     connection.query(q,[data],(err,result) => {
//         if(err) throw err;
//         console.log(result);
        
//     });
// } catch(err){
//     console.log(err);
// }
// connection.end();

