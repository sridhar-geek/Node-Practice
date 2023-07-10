// in this we are using file module Synchronous way 

/* we can use this way or another way , both are same */

// const fs = require('fs');
// fs.readFileSync;
// fs.writeFileSync;

const { readFileSync , writeFileSync }= require("fs");

/* read file takes two parameters
 * one is path
 * another one is encoding  i.e., how our text will be coded/decoded 
 */
console.log("starting the process".toUpperCase());

const first = readFileSync("./text1.txt","utf-8");
const second = readFileSync("./text2.txt","utf-8");

console.log(first,second);

/*write file takes two parameters
 * one is path 
 * another one is text, what we want to write 
 * it will create new file, if file doesn't exists otherwise it'll override given file
 */
writeFileSync("./z_resultSync.txt","Hello this is created using writeSync \n");

// this don't override file, but it will append new content to the file
writeFileSync("./z_resultSync.txt","Hello this is created using writeSync",{ flag: "a" });

console.log("Process end".toUpperCase());


