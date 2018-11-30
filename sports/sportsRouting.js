var express = require('express');
var sportsController = require('./sportsController');
var sportsRouting = express.Router();


sportsRouting.route('/AddSports').post(sportsController.createSports);
sportsRouting.route('/getSports').get(sportsController.getAllSports);
sportsRouting.route('/updateSports/:_id').post(sportsController.updateSports);
sportsRouting.route('/deleteSports').post(sportsController.deleteSports);
sportsRouting.route('/:id').get(sportsController.getById);
module.exports = sportsRouting