const express = require("express");
const router = express.Router();
const {Crud} = require('../models/crudModel');
const getUserIdFromToken = require('../middleware/auth');
const getUserIdFromTokenVerify = require('../middleware/auth')
router.patch("/", async(req, res) => {
    try {
        const id = req.cookies.uid;
        const name=req.body.name;
        const phone=req.body.phone;
        const email=req.body.email;
	    let crud = {name,phone,email};
        // const user = getUserIdFromToken("getToken");
        // const verify = getUserIdFromTokenVerify(req,user);
        // //Aik n te bearer kuthe create hotay
        // console.log(verify);
        const updateRecord = await Crud.findByIdAndUpdate(id,crud);
        if (!updateRecord) {
          return res.status(404).json({ message: 'update not found' });
        }
        res.json({ message: 'Post deleted successfully' });
      } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports  = router;