const express = require('express');
const app = express();

const extraInfo = require("./extraInfo")
const authorize = require("./authorize")

app.use( [extraInfo,authorize] );
// app.use("/api/" ,extraInfo)
/*
 Instead of using extraInfo in every route we can simply use 
 app.use middle ware it will insert that function in every route
 PLACE of app.use middleware is important ,if we place after home 
 it won't apply to home route........

 we can also provide path to it , so that it only to that specific path
*/

app.get("/", (req, res)=>{
    res.send("<h1> Home Page</h1>")
    console.log(req.user);
});
app.get("/about", (req, res)=>{
    res.send("<h1> About Page</h1>")
});
app.get("/api/contact", (req, res)=>{
    res.send("<h1> Contact Us </h1>")
});
app.get("/api/travel", (req, res)=>{
    res.send("<h2> Welcone to travel Page</h2>")
});

/* in this way we can apply extraInfo & authorize middlewares in specific route, without using app.use middleware */

// app.get("/api/travel", [extraInfo, authorize] (req, res)=>{
//     res.send("<h2> Welcone to travel Page</h2>")
// });
app.get("/api/travel", (req, res)=>{
    res.send("<h2> Welcone to travel Page</h2>")
});

app.listen(3000, ()=>{
    console.log("Our server is running on port 3000......")
})
