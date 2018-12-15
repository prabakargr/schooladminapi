const mongoose=require('mongoose');

const Schema=mongoose.Schema

const sportsModel=new Schema({
    JoinDateSports:String,
    height:String,
    weight:String,
    name:String,
    standard:String,
    gender:String,
    sportsname:String,
    studentlevel:String,
    studentKey:String,
    rollno:String

})
module.exports=mongoose.model('sports',sportsModel);
