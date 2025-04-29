// let n = 5;

// for(let i=0;i<n;i++)
// {
//     console.log("hello",i);
// }

// console.log("hello");

// let args = process.argv;

// for(let i =2;i<args.length;i++)
// {
//     console.log("hello",args[i]);
// }

// const math = require("./math");

// console.log(math.sum(2,3));

// # from other directory 
// const info = require("./Fruit");
// console.log(info);

// const figlet = require("figlet");

// figlet("Google", function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
//   });

//# import
// import {sum,pi} from "./math.js";
// console.log(sum(1,2));

import { generate } from "random-words";
console.log(generate());
