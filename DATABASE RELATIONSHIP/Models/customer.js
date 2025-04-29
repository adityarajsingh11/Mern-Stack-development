const mongoose = require("mongoose");
const {Schema} = mongoose;

main().then(() => console.log("connection successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");

}
const orderSchema = new Schema({
    items : String,
    price : Number,
});

const customerSchema = new Schema ({
    name: String,
    orders:[
        {
            type : Schema.Types.ObjectId,  // id stored
            ref : "Order",  // Order ko refernece kr rha h
        }
    ]
});

const Order = mongoose.model("Order",orderSchema);
const Customer = mongoose.model("Customer",customerSchema);

// const addCustomer = async() => {
    // let cust1 = new Customer({
    //     name: "Rahul Kumar",
    // });

    // let order1 = await Order.findOne({items: 'Chips'}); // extract data  from the order
    // let order2 = await Order.findOne({items: 'Chocolate'}); 

    // cust1.orders.push(order1);
    // cust1.orders.push(order2);

    // let result = await cust1.save();
    // console.log(result);

//     let result = await Customer.find({});
//     console.log(result);

// };
// addCustomer();

//populate method (method 2 to print )
let FindCustomer = async () => {
    let result = await Customer.find({}).populate("orders");
    console.log(result);
};
FindCustomer();


// const addOrders = async() => {
//     let res = await Order.insertMany(
//     [
//         { items: "Samosa",price : 12},
//         {items: "Chips",price : 15},
//         {items: "Chocolate",price : 40}
//     ]);
//     console.log(res);
// }

// addOrders();