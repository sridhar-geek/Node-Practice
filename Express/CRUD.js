const express = require('express');
const app = express();
let { people } = require ("../data")


// static route
app.use(express.static("../public"));

/*
to get data in url we've url.query & params but this helps in only for get request,
 in post request data is send in body of that request 
 urlencoded middleware is used to get the data in body of post request 
 */

app.use(express.urlencoded( {extended: false} ))  

        // routes 

/* it'll get the people data */
app.get("/api/people" , (req,res)=>{
    res.status(200).json({status: true, data:people})
    // res.json(people);
});

/* if user didn't send name we can validate and provide appropraite message */

// app.post("/login" ,(req,res)=>{
//     const {name} = req.body;
//     if(name)
//          return res.status(200).send(`<h1>Your request was successful, Welcome ${name}</h1>`)
//     res.status(401).send("Please provide Credentials")
// });


/* this is for route function */
const login = require("./routes")
app.use("/login", login)
/* we are hiding the implementation of routes in this file and place it in another file */


// this route is for update people array , we are using postman to check this 
app.put(" /api/postman/:id", ( req, res) => {

    const {id , name} =req.body
    const person = people.find( (person)=> person.id === Number(id) );
 
    // this is to check whether the user provide valid id or not 
    if( !person){
        return res.status(401).send( `There is no person with that ${id}` )
    }

    // logic to update the new array as per request 
    const newPeople = people.map( (person)=> {
        if(person.id === Number(id)){
            person.name = name;
        }
        return person 
    })
    res.json( {success:true, data : newPeople})
});

// for delete , route is same like update instead of map we use filter method to remove that paticular person from an array 

app.listen(3000, ()=>{
    console.log("Our server is running on port 3000")
})