const express = require('express');
const app = express();
const multer = require('multer');

function storage(filename){
    multer.diskStorage({
        destination:(req,file,cb) => {
            cb(null,`./uploads/${filename}`);
        },
        filename:(req,file,cb) => {
            cb(null,Date.now + file.originalname);
        }
    })    
}

function uploadSingle(filename,name){ 
    app.use((req,res,next) => {
        multer({
            storage:storage(filename)
        }).single(`${name}`);
        next();
    })
}

function uploadMultiple(filename,name){ 
    app.use((req,res,next) => {
        multer({
            storage:storage(filename)
        }).any(`${name}`);
        next();
    })
}

module.exports= {
    uploadSingle,
    uploadMultiple
}