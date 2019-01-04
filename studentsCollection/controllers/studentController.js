const studentModel = require('../../studentsCollection/models/studentModel');
var express     = require('express');
var classModel = require('../../acadamic/models/classModel');
var jwt    = require('jsonwebtoken');
var config = require('../../config');
const app = express();

app.set('superSecret', config.secret);

var admission= function(req, res) {
    var student = new studentModel(req.body);
    var acadamicYear = req.body.officialDetails.acadamicYear;
    var className = req.body.standard;
    var availableSeats;
    student.save(function(err,result){
       if(err){
           res.send('cannot add');
       }else{
          classModel.find({acadamicYear,className},function(err,result){
              if(err){
                  res.send('cannot find and update');
              }else{   
                  for(var i=0;i<result.length;i++){
                        availableSeats = result[i].availableSeats-1;
                     }
                 classModel.findOneAndUpdate({acadamicYear,className},{availableSeats},function(err,finalresult){
                     if(err){
                         res.send('cannot update');
                     }else{
                         res.send(finalresult);
                     }
                 })
              }
          })
       }
    })
}

var checkadmission = function(req,res){
    var token = req.headers['x-access-token'];
    var acadamicYear = req.body.acadamicYear;
    var className = req.body.standard;
    var availableSeats;
    if(token){
        jwt.verify(token,app.get('superSecret'),function(err,decoded){
            if(err){
                return res.json({success:false,message:'Faild To Find User'});
            }else{
                classModel.find({acadamicYear,className}, function(err, result) {
                   if(err){
                       res.send('cannot find');
                   }else{
                    for(var i=0;i<result.length;i++){
                        availableSeats = result[i].availableSeats;
                     }
                     if(availableSeats!==0){
                        res.send(result);

                     }else{
                         res.send({'message':'Admission Closed'});
                     }
                   }
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

var updateContact=function(req,res){
    var token = req.headers['x-access-token'];
    var permanentAddress = req.body.permanentAddress;
    var presentAddress = req.body.presentAddress;
    var city = req.body.city;
    var state = req.body.state;
    var phoneNumber = req.body.phoneNumber;
    var mobileNumber = req.body.mobileNumber;
    var pinCode = req.body.pinCode;
    var country = req.body.country;
    var rollno = req.body.rollno;

    if(token){
        jwt.verify(token,app.get('superSecret'),function(err,decoded){
            if(err){
                return res.json({success:false,message:'Faild To Update'});
            }else{
                studentModel.findOneAndUpdate({rollno},{contactDetails:{permanentAddress,presentAddress,city,state,phoneNumber,mobileNumber,pinCode,country}},function(err, result) {
                   if(err){
                       res.send("Update Faild");
                   }else{
                       studentModel.find({rollno},function(err,result1){
                           if(err){
                               res.send("find faild");
                           }else{
                               res.send(result1);
                           }
                       })
                   }
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

var updateParents=function(req,res){
    var token = req.headers['x-access-token'];
    var faadharNumber = req.body.faadharNumber;
    var farherName = req.body.fatherName;
    var fjob = req.body.fjob;
    var fmobileNumber = req.body.fmobileNumber;
    var maadharNumber = req.body.maadharNumber;
    var mjob = req.body.mjob;
    var mmobileNumber = req.body.mmobileNumber;
    var motherName = req.body.motherName;
    var rollno = req.body.rollno;

    if(token){
        jwt.verify(token,app.get('superSecret'),function(err,decoded){
            if(err){
                return res.json({success:false,message:'Faild To Update'});
            }else{
                studentModel.findOneAndUpdate({rollno},{fatherDetails:{faadharNumber,farherName,fjob,fmobileNumber},motherDetails:{maadharNumber,mjob,mmobileNumber,motherName}},function(err, result) {
                   if(err){
                       res.send("Update Faild");
                   }else{
                       studentModel.find({rollno},function(err,result1){
                           if(err){
                               res.send("find faild");
                           }else{
                               res.send(result1);
                           }
                       })
                   }
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


var deleteStudent = function(req,res){
    var token = req.headers['x-access-token'];
    var _id = req.body._id;
    var standard = req.body.standard;
    var acadamicYear = req.body.acadamicYear;
    var className = req.body.standard;
    var availableSeats;
    if(token){
        jwt.verify(token,app.get('superSecret'),function(err,decoded){
            if(err){
                return res.json({success:false,message:'Faild To Find Student'});
            }else{
                classModel.find({acadamicYear,className},function(err,result){
                    if(err){
                        res.send('cannot find and update');
                    }else{   
                        for(var i=0;i<result.length;i++){
                              availableSeats = result[i].availableSeats+1;
                        }console.log(availableSeats);
                       classModel.findOneAndUpdate({acadamicYear,className},{availableSeats},function(err,finalresult){
                           if(err){
                               res.send('cannot update');
                           }else{
                            studentModel.findByIdAndRemove({_id}, function(err, result) {
                                if (err){
                                    return res.send("err");
                                } 
                                else {
                                    studentModel.find({standard},function(err,find){
                                     if (err) return res.send("err");
                                     else return res.send(find);
                                    })
                                }
                            })
                           }
                       })
                    }
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
   updatePersonalDetails:updatePersonalDetails,
   updateContact:updateContact,
   updateParents:updateParents,
   deleteStudent:deleteStudent,
   checkadmission:checkadmission

}