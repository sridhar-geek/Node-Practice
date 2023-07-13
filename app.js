const express = require('express');
const app = express();
let { people } = require ("./data")


app.use(express.static("./public"));
/*
to get data in url we've url.query & params but this helps in only for get request,
 in post request data is send in body of that request 
 urlencoded middleware is used to get the data in body of post request 
 */
app.use(express.urlencoded({extended: false}))  
app.get("/api/people", (req,res)=>{
    // res.status(200).json({status: true, data:people})
    res.json(people);
});

// app.post("/login" ,(req,res)=>{
//     const {name} = req.body;
//     console.log(name)
//     res.send(`<h1>Your request was successful, Welcome ${name}</h1>`)
// })

/* if user didn't send name we can validate and provide appropraite message */
app.post("/login" ,(req,res)=>{
    const {name} = req.body;
    if(name)
         return res.status(200).send(`<h1>Your request was successful, Welcome ${name}</h1>`)
    res.status(401).send("Please provide Credentials")
})

app.listen(3000, ()=>{
    console.log("Our server is running on port 3000")
})