const router = require('express').Router();
const dcryptjs = require('dcryptjs');
const { uploadSingle } = require('../helper/multer');
const Admin = require('../models/admin');


router.get('/index', async (req,res) => {
    let admins = await Admin.find({"status":true});
    if(admins < 2) return res.status(404).send("Data Not Found");
    if(admins!=null)
        res.status(200).send(admins);
    else
        res.status(500).send("Internal server error");
})


module.exports = router;