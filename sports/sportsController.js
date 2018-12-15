const sportsModel = require('../sports/sportsModel');
const express = require('../sports/sportsModel');
const app = express();

var createSports= function(req, res) {
    var sports = new sportsModel(req.body)
    var studentKey = req.body.studentKey;
    console.log(studentKey)
    
    sportsModel.findOne({studentKey},function(err,result){
       if(result==null){
        sports.save(function(err, result) {
            if (err) return res.send('cannot add')
            else {
                res.send(result)
            }
        })
       }else{
           res.send({"message":"failed"})
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
    var _id=req.body._id;
    sportsModel.findByIdAndRemove({_id},function(err,sports){
            if(!err){
                res.status(204);
                res.send(sports);
            }
        });

}




var getById=function(req,res){
    sportsModel.findById(req.params.id,function(err,sports){
        if(err){
            res.status(404);
            res.send("can not found");
        }else{
            res.status(200);
            res.send(sports)
        }
    })
}

var findGender = function(req, res) {
    var gender = req.body.gender;
    sportsModel.find({gender}, function(err, result) {
        if (err) return res.send("err");
        else return res.send(result);

    })
}

var findsportname =function(req,res){
    var sportsname =req.body.sportsname;
    console.log(sportsname);
    sportsModel.find({sportsname},function(err,result){
        if(err) return res.send("err");
        else return res.send(result);
    })
}

var findStudentLevel = function(req,res){
    var gender = req.body.gender;
    var studentlevel = req.body.studentlevel;
    var sportsname = req.body.sportsname
    console.log(gender,studentlevel,sportsname);
    sportsModel.find({gender,studentlevel,sportsname},function(err,result){
        if(err) return res.send("err");
        else return res.send(result);
    })
}

var findByStandard =function(req,res){
    var standard = req.body.standard;
    console.log(standard);
    sportsModel.find({standard},function(err,result){
        if(err) return res.send("err");
        else return res.send(result);
    })
}

var findlevel = function(req,res){
    var studentlevel =req.body.studentlevel;
    console.log(studentlevel);
    sportsModel.find({studentlevel},function(err,result){
        if(err) return res.send("err");
        else return res.send(result);
    })
}

var updateSports = function(req, res) {
    var _id = req.params._id;
    var JoinDateSports = req.body.JoinDateSports;
    var height = req.body.height;
    var name = req.body.name;
    var standard = req.body.standard;
    var weight =req.body.weight;
    var gender = req.body.gender;
    var sportsname = req.body.sportsname;
    var studentlevel =req.body.studentlevel;
    var studentKey =req.body.studentKey;

    sportsModel.findByIdAndUpdate({ _id }, { JoinDateSports,height,
     name,standard,weight,gender,sportsname,studentlevel},
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
    getById:getById,
    findGender:findGender,
    findStudentLevel:findStudentLevel,
    findByStandard:findByStandard,
    findlevel:findlevel,
    findsportname:findsportname
}