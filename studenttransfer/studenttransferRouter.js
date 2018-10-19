var express = require('express');
var studentsTransferController = require('./studenttransferController');
var studentsTransferRouting = express.Router();

studentsTransferRouting.route('/createtransferstudent').post(studenttransferController.createstudent);
studentsTransferRouting.route('/gettransferstudents').get(studenttransferController.getAllStudents);
studentsTransferRouting.route('/updatetransferstudent/:_id').post(studenttransferController.updateStudent);
studentsTransferRouting.route('/deletetransferstudent').post(studenttransferController.deleteStudent);
studentsTransferRouting.route('/:id').get(studenttransferController.getById);
module.exports = studentsTransferRouting