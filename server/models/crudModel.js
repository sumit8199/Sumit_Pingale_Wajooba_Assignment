const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	phone: {
		type: String,
	},
	email: {
		type: String,
	},
});

//module.exports = mongoose.model("Crud", userSchema);
const Crud = mongoose.model("Cruds", userSchema);

module.exports = {Crud};
