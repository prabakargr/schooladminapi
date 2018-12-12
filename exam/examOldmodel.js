const mongoose=require('mongoose');

const Schema=mongoose.Schema

const oldexamModel=new Schema({
      examName:String,
      subject:String,
      standard:String,
      examDate:String,
      examHallNo:String,
      hallInchargeKey:String,
      hallInchargeName:String,
      examyear:String

 
})
module.exports=mongoose.model('oldexam',oldexamModel);