var express = require('express');
var classController = require('../controllers/classController');
var classRouting = express.Router();


classRouting.route('/cretaeClass').post(classController.addClass);
classRouting.route('/findClass').post(classController.finduser);
classRouting.route('/delclass').post(classController.deleteClass);

module.exports = classRouting