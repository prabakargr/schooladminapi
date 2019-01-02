const studentModel = require('../../studentsCollection/models/studentModel');
var express     = require('express');
var jwt    = require('jsonwebtoken');
var config = require('../../config');
const app = express();

app.set('superSecret', config.secret);

var admission= function(req, res) {
    var student = new studentModel(req.body)
    student.save(function(err,result){
        if(err) return res.status(500).send('cannot add')
        else return res.send(result);
    })
}

var findStudents=function(req,res){
    var token = req.headers['x-access-token'];
    var standard = req.body.standard;
    console.log(standard)
    if(token){
        jwt.verify(token,app.get('superSecret'),function(err,decoded){
            if(err){
                return res.json({success:false,message:'Faild To Find User'});
            }else{
                studentModel.find({standard}, function(err, result) {
                    if (err) return res.send("err");
                    else return res.send(result);
                })
            }
        });
    }else {
    
        // if there is no token
        // return an error
        return res.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        });

 
    };
}

var updatePersonalDetails=function(req,res){
    var token =req.headers['x-access-token'];
    var firstName=req.body.firstName;
    var lastName=req.body.lastName;
    var bloodgroup=req.body.bloodgroup;
    var caste=req.body.caste;
    var religion=req.body.religion;
    var motherTongue=req.body.motherTongue;
    var nationality=req.body.nationality;
    var gender=req.body.gender;
    var dateOfBirth=req.body.dateOfBirth;
    var aaadharNumber=req.body.aaadharNumber;
    var rollno=req.body.rollno;

    studentModel.findOneAndUpdate({rollno},{personalDetails:{
        firstName,lastName,bloodgroup,caste,religion,nationality,motherTongue,gender,dateOfBirth,aaadharNumber
    }},function(err,result){
        if(err){
            res.send("cannot update");
        }else{
            studentModel.find({rollno},function(err,resultOne){
                if(err){
                    res.send("cannot update");
                }else{
                    res.send(resultOne)
                }
            })
        }
    })
}

var findCurrentStudent=function(req,res){
    var token = req.headers['x-access-token'];
    var rollno = req.body.rollno;
    console.log(rollno)
    if(token){
        jwt.verify(token,app.get('superSecret'),function(err,decoded){
            if(err){
                return res.json({success:false,message:'Faild To Find User'});
            }else{
                studentModel.find({rollno}, function(err, result) {
                    if (err) return res.send("err");
                    else return res.send(result);
                })
            }
        });
    }else {
    
        // if there is no token
        // return an error
        return res.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        });

 
    };
}

module.exports = {
   admission:admission,
   findStudents:findStudents,
   findCurrentStudent:findCurrentStudent,
   updatePersonalDetails:updatePersonalDetails

}