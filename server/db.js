require("dotenv").config();
const mongoose = require("mongoose");

module.exports = () => {
	// const connectionParams = { useNewUrlParser: true, useUnifiedTopology: true };connectionParams
	try {
		mongoose.connect(process.env.DB);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};