var express = require('express');
var timetableController = require('./timetableController');
var timetableRouting = express.Router();


timetableRouting.route('/createtimetable').post(timetableController.createTimetable);
timetableRouting.route('/gettimetable').get(timetableController.getAllTimeTable);
timetableRouting.route('/updatetimetable/:_id').post(timetableController.updateTimetable);
timetableRouting.route('/deletetimetable').post(timetableController.deleteTimetable);
timetableRouting.route('/:id').get(timetableController.getById);
timetableRouting.route('/findbyStd').post(timetableController.findByStandard);
timetableRouting.route('/findbyteachers').post(timetableController.findByTeachers);

module.exports = timetableRouting

