'use strict'
const express = require('express');
const PORT = 3000
const HOST = '0.0.0.0'

const app=express();
app.get('/',(req,res)=>{
    res.send('hello world -1.0.0');
})
app.listen(PORT,HOST,()=>{
    console.log(`Runnuing http://${HOST}:${PORT}`)
})
//AAABAS