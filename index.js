const express =require ('express')
const routes=require('./routes')
const {PORT,DB_URL,OPTIONS}=require('./config')
const mongoose=require('mongoose')
const logger=require('./middleware/logger')
const app= express()
8//databse connection
mongoose.connect(DB_URL,OPTIONS,(err)=>{
    if(err) throw new Error (err)
    console.log('database connected')
})

app.use(express.json())
app.use(express.urlencoded({extended:false}))
// loger midleware
app.use(logger)
app.use(routes)

//error handling midelware
app.listen(PORT)
console.log('server start at port'+PORT)