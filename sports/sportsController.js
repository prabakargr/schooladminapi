const sportsModel = require('../sports/sportsModel');
const express = require('../sports/sportsModel');
const app = express()

var createSports= function(req, res) {
    var sports = new sportsModel(req.body)
    sports.save(function(err, result) {
        if (err) return res.send('cannot add')
        else {
            res.send(result)
        }
    })
}


var getAllSports = function(req, res) {
    sportsModel.find(function(err,exams) {
        if (err) {
            res.status(500).send('err')
        } else {
            res.send(exams)
        }
    })
}

var deleteSports=function(req,res){
    var _id=req.body._id
    sportsModel.findByIdAndRemove({_id},function(err,exams){
            if(!err){
                res.status(204);
                res.send("removed");
            }
        });

}

var getById=function(req,res){
    sportsModel.findById(req.params.id,function(err,exams){
        if(err){
            res.status(404);
            res.send("can not found");
        }else{
            res.status(200);
            res.send(exams)
        }
    })
}

var updateSports = function(req, res) {
    var _id = req.params._id;
    var JoinDateSports = req.body.JoinDateSports;
    var aadharnumberject = req.body.aadharnumber;
    var bloodgroup = req.body.bloodgroup;
    var dob = req.body.dob;
    var doj = req.body.doj;
    var fathername = req.body.fathername;
    var fatheroccupation = req.body.fatheroccupation;
    var height = req.body.height;
    var mothername = req.body.mothername;
    var motheroccupation = req.body.motheroccupation;
    var name = req.body.name;
    var standard = req.standard;
    var weight =req.weight;
    console.log(_id);

    sportsModel.findByIdAndUpdate({ _id }, { JoinDateSports,aadharnumberject, bloodgroup, dob,doj, fathername,fatheroccupation,height,
        mothername,motheroccupation,name,standard,weight},
        function(err,sports) {
            if (err) {
                res.status(404).send('connot update')
            } else {
                res.status(200).send(sports);
            }
        })

}


module.exports = {
    createSports: createSports,
    getAllSports: getAllSports,
    deleteSports: deleteSports,
    updateSports:updateSports,
    getById:getById
}