// creating a small app using http server 

const http = require('http');
const fs = require("fs");

// these are used to serve the requried files to the server 
const html = fs.readFileSync("../index.html");
const styles = fs.readFileSync("../navbar-app/styles.css");
const javaScript = fs.readFileSync("../navbar-app/browser-app.js");
const logo = fs.readFileSync("../navbar-app/logo.svg");

// creating server instance
const server=http.createServer((req,res)=>{
    const url = req.url;
    // for homePage
    if(url === "/" ){    
        res.writeHead(200, {"content-type": "text/html"});
        res.write(html);
        res.end();
    }    
    //for styles
    else if(req.url === "/styles.css" ){   
        res.writeHead(200, {"content-type": "text/css"});
        res.write(styles);
        res.end();
    }
    // for javascript logic
    else if(req.url === "/browser-app.js" ){   
        res.writeHead(200, {"content-type": "text/javascript"});
        res.write(javaScript);
        res.end();
    }
    // for logo
    else if(req.url === "/logo.svg" ){   
        res.writeHead(200, {"content-type": "image/svg+xml"});
        res.write(logo);
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

// the main problem with this approach for every feature/file we've create a new server instance and
// we've download all the files seperately 