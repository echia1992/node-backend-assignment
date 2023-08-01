/** @format */

const fs = require("fs");

// kindly uncomment this before running the app.js

// fs.mkdir("Students", (err) => {
//   if (err) {
//     console.error("Error creating Students directory:", err);
//   } else {
//     console.log("Students directory created.");
//     //Step 2: In the Students directory, create a file named user.js
//   }
// });
//creating user.js
// fs.writeFile("Students/user.js", "", (err) => {
//   if (err) {
//     console.error("Error creating user.js:", err);
//   } else {
//     console.log("user.js created.");
//   }
// });

// fs.rename("Students", "Anthony", (err) => {
//   if (err) {
//     console.error("Error renaming Students directory:", err);
//   } else {
//     console.log('Directory renamed to "Names".');
//   }
// });

// const name = "Anthony";
// fs.appendFile("Anthony/user.js", name, (err) => {
//   if (err) {
//     console.error("Error appending name to user.js:", err);
//   } else {
//     console.log("Name added to user.js.");
//   }
// });

// const userInfo = `
// Age: 31
// Sex: Male
// Nationality: Nigeria
// Phone: "08160966136"
// Location : Lagos
// `;
// fs.appendFile("Anthony/user.js", userInfo, (err) => {
//   if (err) {
//     console.error("Error appending user information to user.js:", err);
//   } else {
//     console.log("User information added to user.js.");
//   }
// });

// const newName = "anthony.js";
// fs.rename("Anthony/Anthony.js", `anthony/${newName}`, (err) => {
//   if (err) {
//     console.error("Error renaming user.js:", err);
//   } else {
//     console.log(`user.js renamed to ${newName}.`);
//   }
// });

// fs.readFile(`Anthony/${newName}`, "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//   } else {
//     console.log(`Contents of ${newName}:`);
//     console.log(data);
//   }
// });

//please note that if this below code is run it will recrate and delete the user 
// fs.unlink(`Anthony/${newName}`, (err) => {
//     if (err) {
//         console.error("Error deleting file:", err);
//     } else {
//         console.log(`File ${newName} deleted.`);
//     }
// })
//                   // Step 9: Delete the directory "Names"
//     fs.rmdir("Anthony", (err) => {
//       if (err) {
//         console.error("Error deleting directory:", err);
//       } else {
//         console.log('Directory "Names" deleted.');
//       }
//     });