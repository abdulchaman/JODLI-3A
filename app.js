const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/public", express.static("public"));
app.set('view engine','ejs');
mongoose.connect("mongodb://localhost:27017/queryDB");
const querySchema = {
    name:String,
    email:String,
    phone:String,
    message:String
}

const Query = mongoose.model('Query',querySchema);


app.get("/",(req,res)=>{
 res.render('home',{success:''})
});
app.post("/",(req,res)=>{
    const query = new Query({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        message:req.body.message
    });
    query.save((err)=>{
        if(!err){
            res.render("home",{success:"Your message has successfully submitted."})
        }
    })
});


app.listen(3000,()=>{
    console.log('app has started')
});