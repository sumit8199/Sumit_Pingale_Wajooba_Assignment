const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		////required: [true, "Company Name is required"]
	},
	phone: {
		type: String,
		//required: [true, "User phone number required"]
	},
	email: {
		type: String,
		// required: [true, "Email is required"],
		// trim: true,
		// unique: [true, "Email already exists"],
	},
});

//module.exports = mongoose.model("Crud", userSchema);
const Crud = mongoose.model("Cruds", userSchema);

module.exports = {Crud};