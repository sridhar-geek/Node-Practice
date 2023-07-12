/* http headers are used to give meta data about
    response we are sending to the browser
 */

    const http = require('http');

    const server = http.createServer((req,res)=>{
        res.writeHead(200, { "content-type": "text/html" })
        res.write("<h1>Hello World </h1>")
        res.end();
    });

    server.listen(3000);

    /*
    here in the head part we gave two arguments 
    1.status code --> which gives status whether success or failure
    2.content type --> it tells the browser render that in that specified way 
    */