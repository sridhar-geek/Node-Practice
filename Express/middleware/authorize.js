/*
 * this function is used for simply authorization 
 * here we've to pass query which contains user == sowdha 
 * without user it'll give us anauthorize text on webpage
 * we can also acess req.user varaible in any route we've simply clg(req.user)
 */
const authorize =(req, res, next)=>{
    const {user} = req.query
    if(user === "Sowdha"){
        req.user = {name: "Sowdha", surname: "Moturu"}
        next();
    }else{ 
       return  res.status(401).send("Unauthorized")
    }
}

module.exports= authorize;

/**
 * middleware function is so useful 
 * simply we define authorize function in one file, 
 *  and uses that function in every route in another file.
 * simply using "app.use" middleware to implement this
 */