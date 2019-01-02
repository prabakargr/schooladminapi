const classModel = require('../../acadamic/models/classModel');
var express     = require('express');
var jwt    = require('jsonwebtoken');
var config = require('../../config');
const app = express();

app.set('superSecret', config.secret);

var addClass= function(req, res) {
    var classM = new classModel(req.body)
    classM.save(function(err,result){
        if(err) return res.status(500).send('cannot add')
        else return res.send(result);
    })
}


var finduser=function(req,res){
    var token = req.headers['x-access-token'];
    var acadamicYear = req.body.acadamicYear;
    if(token){
        jwt.verify(token,app.get('superSecret'),function(err,decoded){
            if(err){
                return res.json({success:false,message:'Faild To Find Class'});
            }else{
                classModel.find({acadamicYear}, function(err, result) {
                    if (err) return res.send("err");
                    else return res.send(result);
                })
            }
        });
    }else {
    
        // if there is no token
        // return an error
        return res.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        });

 
    };
}

// var getAllSports = function(req, res) {
//     sportsModel.find(function(err,exams) {
//         if (err) {
//             res.status(500).send('err')
//         } else {
//             res.send(exams)
//         }
//     })
// }

var deleteClass = function(req,res){
    var token = req.headers['x-access-token'];
    var _id = req.body._id;
    var acadamicYear = req.body.acadamicYear;
    if(token){
        jwt.verify(token,app.get('superSecret'),function(err,decoded){
            if(err){
                return res.json({success:false,message:'Faild To Find Class'});
            }else{
                classModel.findByIdAndRemove({_id}, function(err, result) {
                    if (err){
                        return res.send("err");
                    } 
                    else {
                        classModel.find({acadamicYear},function(err,findclass){
                         if (err) return res.send("err");
                         else return res.send(findclass);
                        })
                    }
                })
            }
        });
    }else {
    
        // if there is no token
        // return an error
        return res.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        });

 
    };
}






module.exports = {
    addClass: addClass,
    finduser:finduser,
    deleteClass:deleteClass

}