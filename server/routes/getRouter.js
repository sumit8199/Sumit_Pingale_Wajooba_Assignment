const express = require("express");
const router = express.Router();
const {Crud} = require('../models/crudModel');
const getUserIdFromToken = require('../middleware/auth');
const getUserIdFromTokenVerify = require('../middleware/auth')


router.get("/", async(req, res) => {
    
	try {
        
        const data = await Crud.find({});
        const arr= data.map((item)=>{
            return item;
        });
       // console.log(arr);
       res.send(arr);
    } catch (error) {
        console.log("error");
    }
});

module.exports = router;