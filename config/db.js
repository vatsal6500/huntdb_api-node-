const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/huntdb");

const db = mongoose.connection;

db.on('open',()=>{console.log("Connected")});

module.exports = mongoose;