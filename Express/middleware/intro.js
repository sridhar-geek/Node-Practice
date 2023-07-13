const express = require ("express")
const app = express();

const extraInfo = require("./extraInfo");
/*
    => request middleware respone 
    middleware sits in b/w req & res and it can modify both 
    it has a tonne of functions to make development easy
*/
// here we're using extra info as middleware 

app.get("/", extraInfo, (req, res)=>{
    res.send("<h1> Home Page</h1>")
});
app.get("/about",extraInfo, (req, res)=>{
    res.send("<h1> About Page</h1>")
});

app.listen(3000, ()=>{
    console.log("Our server is running on port 3000......")
})

