function logger(req,res,next){
    console.log(`${req.method} - ${req.path} comfrom ${req.ip}`)
    next()
}

module.exports= logger