/** @format */

const os = require("os");
const process = require("process");

// Print out the current working directory
console.log("Current working directory:", process.cwd());

// Print out the separator of a given file path
const filePath = "/path/to/file.txt";
console.log("File path separator:", path.sep);

// Print out the extension name of a file path
const extensionName = path.extname(filePath);
console.log("Extension name of the file:", extensionName);

// Print out the process id of the current running process
console.log("Process ID:", process.pid);

// Print out the user information of the os
const userInfo = os.userInfo();
console.log("User information:", userInfo);

// Print out the platform of an operating system
console.log("Operating system platform:", os.platform());
