const markModel = require('./markModel');
const express = require('./markModel');
const app = express()

var createMark = async function(req, res) {
    var mark = new markModel(req.body)
    var totalmark = req.body.totalmark;
    var studentMark = req.body.studentMark;
    var standard = req.body.standard;
    var examName = req.body.examName;
    var subject =req.body.subject;
    var total=[]
    if(totalmark==="100"){
       if(studentMark<"100"){
           mark.grade = "A+";
       } else if(studentMark<"90"){
           mark.grade = "A";
       } else if(studentMark<"80"){
           mark.grade = "B+";
       }else if(studentMark<"70"){
           mark.grade ="B";
       }else if(studentMark<"60"){
           mark.grade="C+"
       }else if(studentMark<"50"){
           mark.grade="C"
       }else if(studentMark<"40"){
           mark.grade="D+"
       }else if(studentMark<"35"){
           mark.grade="D"
       }
    }else if(totalmark==="150"){
        if(studentMark<"150"){
            mark.grade = "A+";
        } else if(studentMark<"140"){
            mark.grade = "A";
        } else if(studentMark<"120"){
            mark.grade = "B+";
        }else if(studentMark<"110"){
            mark.grade ="B";
        }else if(studentMark<"90"){
            mark.grade="C+"
        }else if(studentMark<"70"){
            mark.grade="C"
        }else if(studentMark<"50"){
            mark.grade="D+"
        }else if(studentMark<"40"){
            mark.grade="D"
        }
    }
//     markModel.find({standard,examName,subject},function(err,result){
//         for(let i=0;i<result.length;i++){
//             total.push(result[i]);
//           console.log(total)
//         }
//   })

    if(totalmark==="100"){
        if(studentMark<36){
            mark.status = "Fail"
        }else if(total<studentMark){
            mark.status = "Pass"
        }else{
            mark.status = "Firts Class"
        }
    }else if(totalmark==="150"){
        if(studentMark<76){
            mark.status = "Fail"
        }else {
            mark.status = "Pass"
        }
    }
 
    
      
      
   



  await mark.save(function(err, result) {
        if (err) return res.send({'message':'Can not Created'})
        else {
            res.send({'message':'Created Successfully'})
        }
    })
}


var getAllMark = function(req, res) {
    markModel.find(function(err,marks) {
        if (err) {
            res.status(500).send('err')
        } else {
            res.send(marks)
        }
    })
}

var deleteMarks=function(req,res){
    var _id=req.body._id
    markModel.findByIdAndRemove({_id},function(err,marks){
            if(!err){
                res.status(204);
                res.send("removed");
            }
        });

}

var getById=function(req,res){
    markModel.findById(req.params.id,function(err,marks){
        if(err){
            res.status(404);
            res.send("can not found");
        }else{
            res.status(200);
            res.send(marks)
        }
    })
}


var findByStandardAndSub =function(req,res){
    var standard = req.body.standard;
    var examName =req.body.examName;
    var subject =req.body.subject;
    console.log(standard,examName,subject);
    markModel.find({standard,examName,subject},function(err,result){
        console.log(result);
        if(err) return res.send("err");
        else return res.send(result);
    })
}

var findByStandard =function(req,res){
    var standard = req.body.standard;
    markModel.find({standard},function(err,result){
        console.log(result);
        if(err) return res.send("err");
        else return res.send(result);
    })
}

var updateMarks = function(req, res) {
    var _id = req.params._id;
    var examName = req.body.examName;
    var subject = req.body.subject;
    var totalmark = req.body.totalmark;
    var studentKey = req.body.studentKey;
    var teacherKey = req.body.teacherKey;
    var status = req.body.hallInchargeKey;
    var studentMark =req.body.studentMark;
    var standard =req.body.standard;
    var rollno =req.body.rollno;
    var teacher=req.body.teacher;
    var examKey=req.body.examKey;
    console.log(_id);

    markModel.findByIdAndUpdate({ _id }, { examName,rollno,standard,examKey,totalmark,teacher, subject, teacherKey, studentKey ,studentMark,status,hallInchargeName},
        function(err,marks) {
            if (err) {
                res.status(404).send('connot update')
            } else {
                res.status(200).send(marks);
            }
        })

}

module.exports = {
    createMark:createMark,
    getAllMark:getAllMark,
    getById:getById,
    deleteMarks:deleteMarks,
    updateMarks:updateMarks,
    findByStandardAndSub:findByStandardAndSub,
    findByStandard:findByStandard
}