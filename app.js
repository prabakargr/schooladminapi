const express = require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

const app=express()

const db=mongoose.connect("mongodb://school:admin1@ds263740.mlab.com:63740/schooladmin")

const studentsRouting=require('./students/studentsRouting')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,x-access-token");
    next();
});

app.use('/students',studentsRouting)


var port=process.env.PORT || (4000);

app.listen(port, () => console.log(`Running on localhost:4000`));