const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

const adminSchema = new mongoose.Schema({
	username: {
		type: String,
	},
	password: {
		type: String,
	}
});

adminSchema.methods.generateAuthToken = (currId) => {
	try{
		const token = jwt.sign({ _id : currId}, process.env.JWTPRIVATEKEY, {
			expiresIn: "60s",
		});
		return token;
	}
	catch(err){
		console.log('err :>> ', err);
	}
};

const Admin = mongoose.model("admins", adminSchema);

module.exports = {Admin};