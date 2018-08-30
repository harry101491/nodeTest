// ES 6 and 7 features
// const filter = (...args) => {
//     return args.filter(el => el === 1);
// }
// console.log(filter(1, 2, 3));
// const numbers = [1, 2, 3];
// [num1, ,num3] = numbers;
// console.log(num1, num3);
// const notes = require("./notes.js");
// const fs = require("fs");
// const os = require("os");
// let user = os.userInfo();
// appending the data to file
// fs.appendFile("greeting.txt", `Hello ${user.username}`, (err) => {
//     console.log("after appending the data");
//     console.dir(err);
//     if(err) {
//         console.log("Error occured while appending the file");
//     }
// });
// console.log(`Hello ${user.username} and your age is ${notes.addNotes()}.`);
// console.log("Inside the App.js file");
// console.log(os.userInfo());

const _ = require("lodash");

// _.forEach([1, 2, 3, 4], (ele) => {
//     console.log("The element is: "+ ele);
// });

// console.log(_.isString(true));
// console.log(_.isString("Harshit"));

console.log(_.uniq([ 1, 1, "Harshit", "Harshit", 2, 6, 6 ]));