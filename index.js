const express=require("express")
require('dotenv').config()
const app=express()
const PORT = 3000
const dateTime = new Date()

app.get('/', async (req, res)=>{
    res.status(200).send({'status':'200', 'message': 'Employee Profile'})
})

app.listen(process.env.PORT, ()=> {
    console.log(`Employee Profile App is running on port ${process.env.PORT} at ${dateTime}`)
})
