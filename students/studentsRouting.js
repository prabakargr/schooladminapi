var express = require('express');
var studentsController = require('./studentsController');
var studentsRouting = express.Router();


studentsRouting.route('/createstudent').post(studentsController.createStudent);
studentsRouting.route('/getstudents').get(studentsController.getAllStudents);
studentsRouting.route('/updatestudent/:_id').post(studentsController.updateStudent);
studentsRouting.route('/deletestudent').post(studentsController.deleteStudent);
studentsRouting.route('/:id').get(studentsController.getById);
studentsRouting.route('/oldstudent').post(studentsController.createoldStudent)
module.exports = studentsRouting