const mongoose=require('mongoose');

const Schema=mongoose.Schema

const sportsModel=new Schema({
    JoinDateSports:String,
    aadharnumber:String,
    bloodgroup:String,
    dob:String,
    doj:String,
    fathername:String,
    fatheroccupation:String,
    height:String,
    weight:String,
    mothername:String,
    motheroccupation:String,
    name:String,
    standard:String,
    gender:String

 
})
module.exports=mongoose.model('sports',sportsModel);
