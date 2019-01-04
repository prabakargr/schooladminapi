var express = require('express');
var studentController = require('../controllers/studentController');
var studentRouting = express.Router();


studentRouting.route('/addStudents').post(studentController.admission);
studentRouting.route('/findStudent').post(studentController.findStudents);
studentRouting.route('/currentStudent').post(studentController.findCurrentStudent);
studentRouting.route('/updatepersonal').post(studentController.updatePersonalDetails);
studentRouting.route('/updateContactDetails').post(studentController.updateContact);
studentRouting.route('/updateParents').post(studentController.updateParents);
studentRouting.route('/deleteStudents').post(studentController.deleteStudent);
studentRouting.route('/checkadmissionseats').post(studentController.checkadmission);
module.exports = studentRouting