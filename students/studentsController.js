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

var getAllStudents=function(req,res){
    studentModel.find(function(err,students){
        if(err){
            res.status(500).send('err')
        }else{
            res.send(students)
        }
    })
}

module.exports={
    createstudent:createstudent,
    getAllStudents:getAllStudents
}