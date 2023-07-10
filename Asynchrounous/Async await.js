const { rejects } = require('assert');
const { readFile, writeFile } = require('fs');

// // normal asyncrous readFile function 

/*
const path="../fs/text1.txt"
 readFile(path,"utf-8",(err,data)=>{
     if(err){
         console.log(err);
     }else{
         console.log(data);
    }
 });
 */
 


 // this is regular promise function 
 /* 
const getText=(path)=>{
    return new Promise( (resolve,reject)=>{
        readFile(path,"utf-8",(err,data)=>{
            if(err){
                 reject (err)
            }else{
                resolve (data);
            }
         })      //end of readfile function
    })      // end of promise
}       // end of getText function

getText("../fs/text1.txt")
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err);
})
*/

// this is here for async and await 

/*
const getText=(path)=>{
 readFile(path,"utf-8",(err,data)=>{
     if(err){
         console.log(err);
     }else{
         console.log(data);
    }
 });
}

const start = async ()=>{
    try{
        const first = await getText("../fs/text1.txt")
        const second = await getText("../fs/text2.txt")
         console.log(first,second);
    }catch(error){
        console.log(error);
    }
}

start();
// in this function we are retriving  data from two files, and 
// it looks good and organinze while compared with "FS/async.js"
*/


// we can make more easier 
/*
const start = async()=> {
    try{
        const first=await readFile("../fs/text1.txt")
        const second=await readFile("../fs/text2.txt",)

        await writeFile("../fs/z_async.txt",
        `This text is created from async function`,(err)=>{
            if(err)
              throw err;
        }
        )
        console.log(first ,second);
    }
    catch(error){
        console.log(error);
    }
};

start();
*/