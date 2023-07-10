const {writeFile}  = require('fs');

// here we are creating a big file to use in streams 

for (let i = 0; i < 1000; i++) {
    writeFile("./BigFile.txt",`Hello there ,how are you ${i}\n`,
        {flag : "a"},
        (err)=>{
            if(err)
            console.log(err.message);
        }
    );
}

/* write file accepts three arguments 
    1.file name
    2.message or content to be written in file
    3.a callback function , beacuse it is async 
*/