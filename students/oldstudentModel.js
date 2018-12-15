const mongoose=require('mongoose');

const Schema=mongoose.Schema

const oldstudentsModel=new Schema({
    name:String,
    gender:String,
    fathername:String,
    mothername:String,
    aadharnumber:String,
    dob:String,
    mobilenumber:String,
    doj:String,
    standard:String,
    bloodgroup:String,
    fatheroccupation:String,
    motheroccupation:String,
    rollno:String,
    fathermobilenumber:String,
    address:{
        streetname:String,
        cityname:String,
        statename:String
    },
    schoolofyear:String,
    studentKey:String
});


module.exports=mongoose.model('oldstudent',oldstudentsModel);
