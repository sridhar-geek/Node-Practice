// this is for basic Express setup

const express = require('express');

const app = express()  // intilise

app.get('/',(req,res)=>{
    res.send("<h1> This is HomePage </h1>")
});
app.get('/about',(req,res)=>{
    res.send("<h1> This is About Page</h1>")
});

// all method take care every request i.e, get,post,delete,put 
// we're using all method here to navigate all other request and send page not found message
// "*"  is used to represent all urls 
// express automatically handle status code, we can also explicitly mention them 
app.all('*',(req,res)=>{
    res.status(404).send("<h1> Page not Found</h1>")
});

app.listen(3000,()=>{
    console.log("Server is running")
})

