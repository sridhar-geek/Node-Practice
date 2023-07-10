/* streams are same like readfile,but readfiles has some disadvantages
* streams can handle large files 
* they read data in chuncks (samll parts ), so it is easier to readfiles using streams 
*/

/* streams has following methods 
    1.read streams
    2.write streams
    3.transform streams  (modify data)
    4.
*/  



const { createReadStream } = require("fs");

// const stream = createReadStream("./Bigfile.txt");  // intialization
// // event syntax "event listner" and callback
// stream.on("data", (result)=>{
//     console.log(result);
// })

// by default chunk size is 64kb , it uses buffer to store data 
// highWaterMark - control size

const stream = createReadStream("./Bigfile.txt",{ highWaterMark : 8000 ,encoding: "utf-8" });  

stream.on("data", (result)=>{
    console.log(result);
});

// to handle error
stream.on( "error", err=>{
    console.log(err);
});
