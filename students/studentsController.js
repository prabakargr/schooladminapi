const studentModel = require('./studentModel')
const express = require('./studentModel');
const app = express();
const oldStudentModel = require('./oldstudentModel');
const sportsModel = require('../sports/sportsModel');
var createStudent = function(req,res){
         var student = new studentModel(req.body);
         student.save(function(err,student){
             if(err) return res.status(500).send('cannot add')
             else return res.send(student);
         })
} 

var createoldStudent = function(req,res){
    var oldStudent  = new oldStudentModel(req.body)
    oldStudent.save(function(err,oldstudent){
        if(err) return res.status(500).send('cannot add')
        else return res.send(oldstudent);
    })
}

var getAllStudents = function(req, res) {
    studentModel.find(function(err, students) {
        if (err) {
            console.log('err')
            res.status(500).send('err')
        } else {
            res.send(students)
        }
    }) 
}

var deleteStudent=function(req,res){
    var _id=req.body._id
    studentModel.findByIdAndRemove({_id},function(err,students){
            if(!err){
                res.status(204);
                res.send("removed");
            }
        });

}

var getById=function(req,res){
    studentModel.findById(req.params.id,function(err,students){
        if(err){
            res.status(404);
            res.send("can not found");
        }else{
            res.status(200);
            res.send(students)
        }
    })
}

var updateStudent =  function(req, res) {
    var _id = req.params._id;
    var studentKey = req.params._id;
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
    var streetname = req.body.address.streetname;
    var statename =req.body.address.statename;
    var cityname = req.body.address.cityname;
    var schoolofyear = req.body.schoolofyear;
    var rollno = req.body.rollno;
    var studentlevel;
    
     studentModel.findByIdAndUpdate({ _id }, 
        { name,fathername,aadharnumber,bloodgroup,dob,doj,fatheroccupation,gender,mobilenumber,mothername,standard,motheroccupation ,rollno,
            address:{streetname,cityname,statename},
            schoolofyear
        },
        function(err, student) {
            if (err) {
                res.status(404).send('connot update')
            } else {
                res.status(200).send(student);
            }
        });
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
}

// var sportsUpdate = function(req,res){
//     var _id = req.params._id;
//     console.log(_id)
//     sportsModel.findOneAndUpdate({studentKey},{standard},
//         function(err,sports){
//             if(err){
//                 res.status(404).send('can not update');
//             }else{
//                 res.status(200).send(sports)
//             }
//         })
// }

module.exports = {
    createStudent: createStudent,
    getAllStudents: getAllStudents,
    updateStudent: updateStudent,
    deleteStudent:deleteStudent,
    getById:getById,
    createoldStudent:createoldStudent
}