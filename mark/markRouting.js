var express = require('express');
var markController = require('./markController');
var markRouting = express.Router();


markRouting.route('/createMark').post(markController.createMark);
markRouting.route('/getMark').get(markController.getAllMark);
markRouting.route('/getoldExam').post(markController.deleteMarks);
markRouting.route('/updateMarksdata/:_id').post(markController.updateMarks);
markRouting.route('/:id').get(markController.getById);
markRouting.route('/findbystandard').post(markController.findByStandard);
markRouting.route('/findbySub').post(markController.findByStandardAndSub);


module.exports = markRouting