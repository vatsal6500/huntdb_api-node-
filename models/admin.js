const mongoose = require('../config/db');

let schema = mongoose.Schema;

let userSchema = new schema({
    aname    : String,
    age      : Number,
    gender   : String,
    email    : String,
    username : String,
    password : String,
    aphoto   : String,
    status : {
        type    : Boolean,
        default : true
    },
    date : {
        type    : Date,
        default : Date.now()
    }
});

let Admin = mongoose.model("Admin",userSchema);

module.exports = Admin;