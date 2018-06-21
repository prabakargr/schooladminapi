var express=require('express');
var studentsController=require('./studentsController');
var studentsRouting=express.Router();

studentsRouting.route('/createstudent').post(studentsController.createstudent);


module.exports=studentsRouting