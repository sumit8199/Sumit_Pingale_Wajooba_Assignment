const express = require("express");
const router = express.Router();
const {Crud} = require('../models/crudModel');

router.post("/", async(req, res) => {
    const name=req.body.name;
    const phone=req.body.phone;
    const email=req.body.email;
	let crud = {name,phone,email};
	await new Crud({ ...crud}).save()
	.then((crud) => {
				res.send(crud);
				console.log("added");
			})
			.catch(function (err) {
				res.status(422).send("user add failed");
			});
});

// router.get("/:id", (req, res) => {
// 	Crud.findById(req.params.id, function (err, crud) {
// 		if (!crud) {
// 			res.status(404).send("No result found");
// 		} else {
// 			res.json(user);
// 		}
// 	});
// });

// router.patch("/:id", (req, res) => {
// 	Crud.findByIdAndUpdate(req.params.id, req.body)
// 		.then(function () {
// 			res.json("user updated");
// 		})
// 		.catch(function (err) {
// 			res.status(422).send("user update failed.");
// 		});
// });

// router.delete("/:id", (req, res) => {
// 	Crud.findById(req.params.id, function (err, crud) {
// 		if (!crud) {
// 			res.status(404).send("not found");
// 		} else {
// 			user.findByIdAndRemove(req.params.id)
// 				.then(function () {
// 					res.status(200).json("user deleted");
// 				})
// 				.catch(function (err) {
// 					res.status(400).send("user delete failed.");
// 				});
// 		}
// 	});
// });

module.exports = router;