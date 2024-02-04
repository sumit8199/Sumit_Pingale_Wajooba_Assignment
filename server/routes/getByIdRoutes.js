const express = require("express");
const router = express.Router();
const {Crud} = require('../models/crudModel');

router.get("/", async(req, res) => {
	try {
        const id = req.cookies.uid;
        const data = await Crud.findById({_id: id});
        
       //console.log(data);
       res.send(data);
    } catch (error) {
        console.log("error");
    }
});

module.exports = router;