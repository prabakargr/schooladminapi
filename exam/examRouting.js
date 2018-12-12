var express = require('express');
var examController = require('../exam/examController');
var examRouting = express.Router();


examRouting.route('/createExam').post(examController.createExam);
examRouting.route('/getExam').get(examController.getAllExam);
examRouting.route('/getoldExam').get(examController.getAllOldExam)

examRouting.route('/updateExam/:_id').post(examController.updateExam);
examRouting.route('/deleteExam').post(examController.deleteExam);
examRouting.route('/:id').get(examController.getById);
examRouting.route('/FindExamName').post(examController.findByStandardAndExam);
examRouting.route('/oldexam').post(examController.oldExamcreate);
module.exports = examRouting