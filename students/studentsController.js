const studentModel = require('./studentModel')
const express = require('./studentModel');
const app = express();
const sportsModel = require('../sports/sportsModel');


var createStudent = async function(req,res){
         var student = new studentModel(req.body);
         await student.save();
         var sport = new sportsModel()
         sport.rollno = student.rollno;
         sport.name = student.name;
         sport.gender = student.gender;
         sport.standard = student.standard;
         sport.save();
         res.json(sport);


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

var updateStudent = async function(req, res) {
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
    var streetname = req.body.address.streetname;
    var statename =req.body.address.statename;
    var cityname = req.body.address.cityname;
    var from = req.body.schoolofyear.from;
    var end = req.body.schoolofyear.end;
    console.log(_id);

    studentModel.findByIdAndUpdate({ _id }, 
        { name,fathername,aadharnumber,bloodgroup,dob,doj,fatheroccupation,gender,mobilenumber,mothername,standard,motheroccupation ,
            address:{streetname,cityname,statename},
            schoolofyear:{from,end}
        },
        function(err, student) {
            if (err) {
                res.status(404).send('connot update')
            } else {
                res.status(200).send(student);
            }
        });
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
    getById:getById
}