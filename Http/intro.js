// this file creates basic http server 

const http = require('http');

const server=http.createServer((req,res)=>{
    if(req.url === "/" ){    // for homePage
        res.end("Welcome to Http server instance");
    }    
    if(req.url === "/about" ){   //for About Page
        res.end("Your Viewing about page ");
    }
    res.end(`             
        <h1> Page Not Found </h1>
        <p> to navigate to Home page please Click the link below </p>
        <a href= "/" >Back to HomePage</a>
    `)  // for any other url 
});

server.listen(3000,()=>
console.log("Our server is running on port 3000")
);

/** this creates basic http server without routing */

// const server1=http.createServer((req,res)=>{
//     res.write("Welcome to Homepage");
//     res.end();
// });