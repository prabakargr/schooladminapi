const timetableModel = require('./timetableModel')
const express = require('./timetableModel')
const app = express()

var createTimetable= function(req, res) {
    var timetable = new timetableModel(req.body)
    timetable.save(function(err, result) {
        if (err) return res.send('cannot add')
        else {
            res.send(result)
        }
    })
}


var getAllTimeTable = function(req, res) {
    timetableModel.find(function(err,timetable) {
        if (err) {
            res.status(500).send('err')
        } else {
            res.send(timetable)
        }
    })
}

var deleteTimetable=function(req,res){
    var _id=req.body._id
    timetableModel.findByIdAndRemove({_id},function(err,timetable){
            if(err){
                return res.send("cannot deleted")
            }else {
                res.send({"message":"Deleted successfully"})
            }
        });

}

var getById=function(req,res){
    timetableModel.findById(req.params.id,function(err,timetable){
        if(err){
            res.status(404);
            res.send("can not found");
        }else{
            res.status(200);
            res.send(timetable)
        }
    })
}

var findByStandard =function(req,res){
    var standard = req.body.standard;
    var day = req.body.day;
    console.log(standard);
    timetableModel.find({standard,day},function(err,result){
        if(err){
            return res.send("cannot deleted")
        }else {
            res.send(result)
        }
    })
}

var findByTeachers =function(req,res){
    var teacherkey = req.body.teacherkey;
    var day = req.body.day;
    console.log(teacherkey);
    timetableModel.find({teacherkey,day},function(err,result){
        console.log(result);
        if(err) return res.send("Record Not Found");
        else return res.send(result);
    })
}

var updateTimetable = function(req, res) {
    var _id = req.params._id;
    var standard = req.body.standard;
    var subject = req.body.subject;
    var periodno = req.body.periodno;
    var teachername = req.body.teachername;
    var from = req.body.time.from;
    var end = req.body.time.end;
    var teacherkey = req.body.teacherkey;
    var day = req.body.day;
    var from = req.body.time.from;
    var end=req.body.time.end;
    console.log(_id);

    timetableModel.findByIdAndUpdate({ _id }, { standard, subject, periodno, teachername,time:{from,end},teacherkey,day },
        function(err,timetable) {
            if (err) {
                res.status(404).send('connot update')
            } else {
                res.status(200).send(timetable);
            }
        })

}


module.exports = {
    createTimetable: createTimetable,
    getAllTimeTable: getAllTimeTable,
    updateTimetable: updateTimetable,
    deleteTimetable:deleteTimetable,
    getById:getById,
    findByStandard:findByStandard,
    findByTeachers:findByTeachers
}