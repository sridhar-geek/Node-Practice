// this file creates basic http server 
const http = require('http');

/** this creates basic http server without routing */

// const server1=http.createServer((req,res)=>{
//     console.log("user hit the browser"); 
//     res.write("Welcome to Homepage");
//     res.end();
// });

// res.end() specificy that every thing (body,headers) are sent and it must use in every request
const server=http.createServer((req,res)=>{
    const url = req.url;
    // for homePage
    if(url === "/" ){    
        res.writeHead(200, {"content-type": "text/plain"});
        res.write("Welcome to Http server instance");
        res.end();
    }    
    //for About Page
    else if(req.url === "/about" ){   
        res.writeHead(200, {"content-type": "text/plain"});
        res.write("Your viewing about page");
        res.end();
    }
     // for any other an url
    else{   
        res.writeHead(404, {"content-type": "text/html"});
        res.write(`             
            <h1> Page Not Found </h1>
            <p> to navigate to Home page please Click the link below </p>
            <a href= "/" >Back to HomePage</a>
        `)
        res.end();
    }
});

server.listen(3000,()=>
console.log("Our server is running on port 3000")
);
