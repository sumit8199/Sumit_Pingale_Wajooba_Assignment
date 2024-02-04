const express = require("express");
const router = express.Router();
const {Admin} = require("../models/adminModel");
const Joi = require("joi");
const verifyToken = require("../middleware/auth");
//const { verify } = require("jsonwebtoken");

//const getUserIdFromToken = require("../middlewares/auth");



router.post("/", async (req, res) => {
	let token;
	const myemail = req.body.username;
	const mypass = req.body.password;
	// console.log(myemail);
	// console.log(mypass);
	
	const check ={
		username : myemail,
		password : mypass
	}
	try {
		//console.log("hello");
		const { error } = validate(check);
		if (error)
			return res.status(400).send({ message: error.details[0].message });
		console.log("hello");
	
		const admin = await Admin.findOne({ username: myemail });
		if (!admin)
			return res.status(401).send({ message: "Invalid Email or Password" });
			
		
		const validPassword = mypass === admin.password ? true : false;
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });
		
		//console.log(validPassword);
	
		token = admin.generateAuthToken(admin._id);
		//console.log(token);
		res.cookie("gettoken",token,
			{
				withCredentials: true,
				httpOnly: true,
				maxAge:60000,
			}
		 );
		res.status(200).send({  message: "logged in successfully" });
		// console.log("hello22 ");
	
	// 	// res.status(200).send({  message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}

});

const validate = (data) => {
	const schema = Joi.object({
		username: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = router;