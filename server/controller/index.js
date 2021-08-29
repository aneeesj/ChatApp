const model = require('../models');
var sequelize = require('sequelize');
const Op = sequelize.Op;

/**
FOR  Hr/admin Registration
**/
async function test(req, res) {
	try {
		let savedUser;
		console.log("hello");
		// const admin = new Admin({
		// 	"user_name": req.body.user_name,
		// 	"type": req.body.type,
		// 	"email": req.body.email,
		// 	"password": CryptoJS.AES.encrypt(JSON.stringify(req.body.password), crptoKey).toString(),
		// 	"status": true
		// });
		var aa = {
			firstName: "Hello", lastName: "Test", email: "harry@gmail.com"
		}
		savedUser = await model.User.create(aa);
		if (savedUser) {
			res.json({
				status: true,
				data: savedUser,
			});
		} else {
			res.json({
				msg: "Something is wrong",
				status: false
			})
		}
	} catch (err) {
		console.log("hello", err);
		res.json({
			message: err,
		});
	}
}




module.exports = {
	test
};