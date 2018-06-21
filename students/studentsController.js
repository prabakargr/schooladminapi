const studentModel=require('./studentModel')
const express=require('./studentModel');
const app=express()

var createstudent=function(req,res){
    var student=new studentModel(req.body)
    student.save(function(err,result){
        if(err) return res.send('cannot add')
        else{
            res.send(result)
        }
    })
}

module.exports={
    createstudent:createstudent
}