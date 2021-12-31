const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');


const app = express();
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
});
app.listen(3000,()=>{
    console.log('app has started')
});