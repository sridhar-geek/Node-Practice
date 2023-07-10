// this file is used to create and read files asyncronsly 

const { readFile , writeFile }=require("fs");

/* since these are Async these have a callback functions 
  it takes a path ,encoding and a callback function 
 */

  console.log("process is start".toUpperCase());
  readFile("./text1.txt", "utf-8" ,(err,result)=>{
    if(err)
        console.log(err);
    
    const first =result;
    console.log(first);T

  readFile("./text2.txt", "utf-8" ,(err,result)=>{
    if(err)
        console.log(err);
    
    const second =result;
       console.log(second);

     writeFile("./z_resultAsync.txt",`Here is the result ${first} , ${second}`,
     (err,result)=>{
        if(err)
        console.log(err)
        
        console.log("writing is finished".toUpperCase())  // this will execute last
     });
  });
  });

  console.log("process is end".toUpperCase()); 


  // this is great, beacuse it didn't block other code while executing write and read file 
  // but it produces a callback hell