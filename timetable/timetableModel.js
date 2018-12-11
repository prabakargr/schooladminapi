const mongoose=require('mongoose');

const Schema=mongoose.Schema

const timetableModel=new Schema({
    standard:String,
    periodno:String,
    teachername:String,
    time:{
        from:String,
        end:String
    },
    subject:String,
    teacherkey:String,
    day:String
})
module.exports=mongoose.model('timetable',timetableModel);
