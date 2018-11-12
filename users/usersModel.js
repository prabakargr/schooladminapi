var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var userModel=new Schema({
    email:String,
    password:String,
   

});
module.exports=mongoose.model("users1",userModel);