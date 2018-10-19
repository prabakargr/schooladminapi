const mongoose=require('mongoose');

const Schema=mongoose.Schema

const studentTransferModel=new Schema({
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
    motheroccupation:String

})

module.exports=mongoose.model('studentTransfer',studentTransferModel);