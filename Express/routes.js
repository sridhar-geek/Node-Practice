const express = require('express');

const router = express.Router();

router.post("/" ,(req,res)=>{
    const {name} = req.body;
    if(name)
         return res.status(200).send(`<h1>Your request was successful, Welcome ${name}</h1>`)
    res.status(401).send("Please provide Credentials")
});

module.exports = router;


/* routers are used, if there are same urls has different methods 
    example. post("/api/people"), get("/api/people"), put("/api/people/:id"),delete("/api/people/:id")

    instead of floding app.js file we can arrange same type of routes in a single file and use them in app.js file
    this will increase matainability , readness
*/