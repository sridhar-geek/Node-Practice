const http = require('http');
const fs = require('fs');

// http.createServer((req,res)=>{
//     const text = fs.readFileSync("./bigfile.txt","utf-8")
//     res.end(text);
// }).listen(3000);

// we can send file in this format, but this is not effecient 

http.createServer((req,res)=>{
    const stream = fs.createReadStream("./bigfile.txt",'utf-8')
    stream.on("data",()=>{
       stream.pipe(res);
    })
    
    stream.on("error",err=>{
        res.end(err.message);
    })

}).listen(3000);

// this is best way to send data i.e, send data in chunks
