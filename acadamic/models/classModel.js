const mongoose=require('mongoose');

const Schema=mongoose.Schema

const classModel=new Schema({
   className:String,
   acadamicYear:String,
   section:String,
   totalStudents:Number,
   classTeachers:String,
   availableSeats:Number
})
module.exports=mongoose.model('acadamic-class',classModel);
