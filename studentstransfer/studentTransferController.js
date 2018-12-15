const studentTransferModel = require('./studentTransferModel')
const studentModel = require('../students/studentModel');
const oldStudentModel = require('../students/oldstudentModel');
const sportsModel = require('../sports/sportsModel');
const express = require('./studentTransferModel');
const app = express()

var createstudentTransfer = async function(req, res) {
    var transfer = new studentTransferModel(req.body);
    var oldstudent = new oldStudentModel(req.body);
    await transfer.save();
    await oldstudent.save();
    var student = new studentModel()
    student.name = transfer.name;
    student.gender = transfer.gender;
    student.fathername=transfer.fathername;
    student.mothername=transfer.mothername;
    student.aadharnumber=transfer.aadharnumber;
    student.dob=transfer.dob;
    student.mobilenumber=transfer.mobilenumber;
    student.doj=transfer.doj;
    student.standard=transfer.tostd;
    student.bloodgroup=transfer.bloodgroup;
    student.fatheroccupation=transfer.fatheroccupation;
    student.motheroccupation=transfer.motheroccupation;
    student.rollno=transfer.rollno;
    student.fathermobilenumber=transfer.fathermobilenumber;
    student.address.streetname=transfer.address.streetname;
    student.address.statename=transfer.address.statename;
    student.address.cityname=transfer.address.cityname;
    student.schoolofyear=transfer.schoolofyear;
    student.studentKey=transfer.studentKey;
    var studentKey = transfer.studentKey;
    var standard = transfer.tostd;
    var rollno  = transfer.rollno;
    student.save();
    res.json(student)
    if(standard==="12" || standard==="11"){
        studentlevel = "supersenior"
    }else if(standard==="10" || standard==="9"){
        studentlevel = "senior"
    }else {
        studentlevel ="junior"
    }
    console.log(studentKey,studentlevel,standard);
    sportsModel.findOneAndUpdate({rollno},{standard,studentlevel},
        function(err,sports){
           if(sports){
               console.log("test"+sports)
           }
        })
    // var _id=req.body._id
    // console.log(transfer)
    // transfer.save(function(err, result) {
    //     if (err) return res.send('cannot add')
    //     else {
    //         res.send(result)
    //     }
    // })


    
}

var getAllStudentsTransfer = function(req, res) {
    studentTransferModel.find(function(err, transfers) {
        if (err) {
            res.status(500).send('err')
        } else {
            res.send(transfers)
        

        }
    })
}



var deleteStudentTransfer=function(req,res){
    var _id=req.body._id
    studentTransferModel.findByIdAndRemove({_id},function(err,transfers){
            if(!err){
                res.status(204);
                res.send("removed");
            }
        });

}


var getById=function(req,res){
    studentTransferModel.findById(req.params.id,function(err,transfers){
        if(err){
            res.status(404);
            res.send("can not found");
        }else{
            res.status(200);
            res.send(transfers)
        }
    })
}


var updateStudentTransfer = function(req, res) {
    var _id = req.params._id;
    var name = req.body.name;
    var fathername = req.body.fathername;
    var aadharnumber = req.body.aadharnumber;
    var bloodgroup = req.body.bloodgroup;
    var dob = req.body.dob;
    var doj = req.body.doj;
    var fatheroccupation = req.body.fatheroccupation;
    var gender = req.body.gender;
    var mobilenumber = req.body.mobilenumber;
    var mothername = req.body.mothername;
    var standard = req.body.standard;
    var motheroccupation = req.body.motheroccupation;
    console.log(_id);

    studentTransferModel.findByIdAndUpdate({ _id }, { name, fathername, aadharnumber, bloodgroup, dob, doj, fatheroccupation, gender, mobilenumber, mothername, standard, motheroccupation },
        function(err, transfer) {
            if (err) {
                res.status(404).send('connot update')
            } else {
                res.status(200).send(transfer);
            }
        })

}

module.exports = {
    createstudentTransfer: createstudentTransfer,
    getAllStudentsTransfer:getAllStudentsTransfer,
    deleteStudentTransfer:deleteStudentTransfer,
    getById:getById,
    updateStudentTransfer:updateStudentTransfer
}
