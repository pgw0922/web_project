const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb+srv://pgw0922:parkgunwoo2005@project.6uhjide.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=> console.log('Mongo DB connected'))
  .catch(err => console.log(err))


app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(3000,()=>{
    console.log('server on')
})