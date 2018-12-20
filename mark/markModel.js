const mongoose=require('mongoose');

const Schema=mongoose.Schema

const markModel=new Schema({
      examName:String,
      subject:String,
      standard:String,
      name:String,
      studentKey:String,
      teacherKey:String,
      status:String,
      studentMark:String,
      totalmark:String,
      rollno:String,
      teacher:String,
      examKey:String,
      grade:String
 
})
module.exports=mongoose.model('mark',markModel);