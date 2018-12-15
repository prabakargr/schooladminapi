const examModel = require('../exam/examModel');
const oldexamModel = require('../exam/examOldmodel')
const express = require('../exam/examModel');
const app = express()

var createExam= function(req, res) {
    var exam = new examModel(req.body)
    exam.save(function(err, result) {
        if (err) return res.send('cannot add')
        else {
            res.send(result)
        }
    })
}


var getAllExam = function(req, res) {
    examModel.find(function(err,exams) {
        if (err) {
            res.status(500).send('err')
        } else {
            res.send(exams)
        }
    })
}


var getAllOldExam =function(req,res){
    oldexamModel.find(function(err,exams){
        if(err){
            res.status(500).send('err')
        }else {
            res.send(exams);
        }
    });
}

var deleteExam=function(req,res){
    var _id=req.body._id
    examModel.findByIdAndRemove({_id},function(err,exams){
            if(!err){
                res.status(204);
                res.send("removed");
            }
        });

}


var oldExamcreate= function(req, res) {
    var oldexam = new oldexamModel(req.body)
    oldexam.save(function(err, result) {
        if (err) return res.send('cannot add')
        else {
            res.send(result)
        }
    })
}

var deleteOldExam=function(req,res){
    var _id=req.body._id
    oldexamModel.findByIdAndRemove({_id},function(err,exams){
            if(!err){
                res.status(204);
                res.send("removed");
            }
        });

}

var getById=function(req,res){
    examModel.findById(req.params.id,function(err,exams){
        if(err){
            res.status(404);
            res.send("can not found");
        }else{
            res.status(200);
            res.send(exams)
        }
    })
}

var findByStandardAndExam =function(req,res){
    var standard = req.body.standard;
    var examName =req.body.examName;
    console.log(standard,examName);
    examModel.find({standard,examName},function(err,result){
        console.log(result);
        if(err) return res.send("err");
        else return res.send(result);
    })
}

var findoldexambyyears =function(req,res){
    var examyear =req.body.examyear;
    var standard = req.body.standard;
    var examName =req.body.examName;
    oldexamModel.find({standard,examName,examyear},function(err,result){
        console.log(result);
        if(err) return res.send("err");
        else return res.send(result);
    })
}

var updateExam = function(req, res) {
    var _id = req.params._id;
    var examName = req.body.examName;
    var subject = req.body.subject;
    var examDate = req.body.examDate;
    var examHallNo = req.body.examHallNo;
    var hallInchargeName = req.body.hallInchargeName;
    var hallInchargeKey = req.body.hallInchargeKey;
    var examyear =req.body.examyear;
    var standard =req.body.standard;
    console.log(_id);

    examModel.findByIdAndUpdate({ _id }, { examName,standard, subject, examDate, examHallNo ,examyear,hallInchargeKey,hallInchargeName},
        function(err,exams) {
            if (err) {
                res.status(404).send('connot update')
            } else {
                res.status(200).send(exams);
            }
        })

}


module.exports = {
    createExam: createExam,
    getAllExam: getAllExam,
    updateExam: updateExam,
    deleteExam:deleteExam,
    getById:getById,
    findByStandardAndExam:findByStandardAndExam,
    oldExamcreate:oldExamcreate,
    getAllOldExam:getAllOldExam,
    deleteOldExam:deleteOldExam,
    findoldexambyyears:findoldexambyyears
}