const mongoose=require('mongoose');

const Schema=mongoose.Schema

const studentsModel=new Schema({
    officialDetails:{
        acadamicYear:String,
        classSection:String,
        joiningDate:String
        },
    registerNumber:String,
    rollno:String,
    standard:String,
    personalDetails:{
        aaadharNumber:String,
        bloodgroup:String,
        caste:String,
        dateOfBirth:String,
        firstName:String,
        gender:String,
        lastName:String,
        motherTongue:String,
        nationality:String,
        religion:String
    },
    contactDetails:{
        city:String,
        country:String,
        mobileNumber:String,
        permanentAddress:String,
        phoneNumber:String,
        pinCode:String,
        presentAddress:String,
        state:String
    },
    fatherDetails:{
        farherName:String,
        faadharNumber:String,
        fjob:String,
        fmobileNumber:String
    },
    motherDetails:{
        motherName:String,
        mmobileNumber:String,
        maadharNumber:String,
        mjob:String
    }


})
module.exports=mongoose.model('studentsData',studentsModel);
