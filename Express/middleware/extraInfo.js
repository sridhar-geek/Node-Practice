const extraInfo = (req, res, next)=>{
    const method = req.method
    const url = req.url
    const time = new Date().getDate()
    console.log(method, url, time)
    next();            // either we teriminate or give next function in middleware
}

module.exports= extraInfo;