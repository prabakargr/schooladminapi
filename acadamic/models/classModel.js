const mongoose=require('mongoose');

const Schema=mongoose.Schema

const classModel=new Schema({
   className:String,
   acadamicYear:String,
   totalStudents:String,
   classTeachers:String
})
module.exports=mongoose.model('acadamic-class',classModel);
