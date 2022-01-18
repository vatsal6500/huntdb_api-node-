const express = require('express');
const app = express();
const adminRouter = require('./router/adminRouter');
const helmet = require('helmet');
const morgan = require('morgan');

//set templete


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan("combined"));
app.use(helmet());

//set routers
app.use('/admin',adminRouter);


//listen server 
app.listen(8000,(err) => {
    if(err) return console.log("Failed to start Server");
    console.log(`click to link  http://localhost:8000/`);
})