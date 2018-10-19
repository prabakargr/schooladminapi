const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const mongodb = require('mongodb');

const app = express()

const db = mongoose.connect("mongodb://school:admin1@ds263740.mlab.com:63740/schooladmin")
    // const db = mongoose.connect("mongodb://localhost:27017/schoolApp")

const studentsRouting = require('./students/studentsRouting');
const teachersRouting = require('./teachers/teachersRouting');
// const studenttransferRouting = require('./studenttransfer/studenttransferRouter');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,application/json, Accept,x-access-token");
    next();
});

app.use('/students', studentsRouting);
app.use('/teachers', teachersRouting);
// app.use('/studenttrasfer',studentstransferRouting);


var port = process.env.PORT || (4000);

app.listen(port, () => console.log(`Running on localhost:4000`));