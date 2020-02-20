const { chai, server, should } = require("./testConfig");
const UserModel = require("../models/UserModel");

/**
 * Test cases to test all the authentication APIs
 * Covered Routes:
 * (1) Login
 * (2) Register
 * (3) Resend Confirm OTP
 * (4) Verify Confirm OTP
 */

describe("Auth", () => {

	// Before each test we empty the database
	before((done) => {
		UserModel.deleteMany({}, (err) => {
			done();
		});
	});

	// Prepare data for testing
	const testData = {
		"username": "suhhdood3231",
		"email": "thevodkastudios@gmail.com",
		"password": "Test@123"
	};

	/*
  * Test the /POST route
  */
	describe("/POST Register", () => {
		it("It should send validation error for Register", (done) => {
			chai.request(server)
				.post("/api/auth/register")
				.send({ "username": testData.username })
				.end((err, res) => {
					res.should.have.status(400);
					done();
				});
		});
	});

	/*
  * Test the /POST route
  */
	describe("/POST Register", () => {
		it("It should Register user", (done) => {
			chai.request(server)
				.post("/api/auth/register")
				.send({
					"username": testData.username,
					"email": testData.email,
					"password": testData.password
				})
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property("message").eql("Registration Success.");
					testData._id = res.body.data._id;
					done();
				});
		});
	});

	/*
  * Test the /POST route UNUSED
  */
	// describe("/POST Login", () => {
	// 	it("it should Send account not confirm notice.", (done) => {
	// 		chai.request(server)
	// 			.post("/api/auth/login")
	// 			.send({"username": testData.username,"password": testData.password})
	// 			.end((err, res) => {
	// 				res.should.have.status(200);
	// 				res.body.should.have.property("message").eql("Account is not confirmed. Please confirm your account.");
	// 				done();
	// 			});
	// 	});
	// });

	/*
  * Test the /POST route UNSUSED.
  */
	// describe("/POST Resend  Confirm OTP", () => {
	// 	it("It should resend  confirm OTP", (done) => {
	// 		chai.request(server)
	// 			.post("/api/auth/resend-verify-otp")
	// 			.send({"email": testData.email})
	// 			.end((err, res) => {
	// 				res.should.have.status(200);
	// 				UserModel.findOne({_id: testData._id},"confirmOTP").then((user)=>{                
	// 					testData.confirmOTP = user.confirmOTP;
	// 					done();
	// 				});
	// 			});
	// 	});
	// });

	/*
  * Test the /POST route UNUSED
  */
	// describe("/POST Verify Confirm OTP", () => {
	// 	it("It should verify confirm OTP", (done) => {
	// 		chai.request(server)
	// 			.post("/api/auth/verify-otp")
	// 			.send({"email": testData.email, "otp": testData.confirmOTP})
	// 			.end((err, res) => {
	// 				res.should.have.status(200);
	// 				done();
	// 			});
	// 	});
	// });

	/*
  * Test the /POST route
  */
	describe("/POST Login", () => {
		it("It should send validation error for Login", (done) => {
			chai.request(server)
				.post("/api/auth/login")
				.send({ "userrname": testData.username })
				.end((err, res) => {
					res.should.have.status(400);
					done();
				});
		});
	});

	/*
  * Test the /POST route
  */
	describe("/POST Login", () => {
		it("it should Send failed user Login", (done) => {
			chai.request(server)
				.post("/api/auth/login")
				.send({ "username": "admin", "password": "1234" })
				.end((err, res) => {
					res.should.have.status(401);
					done();
				});
		});
	});

	/*
  * Test the /POST route
  */
	describe("/POST Login", () => {
		it("it should do user Login", (done) => {
			chai.request(server)
				.post("/api/auth/login")
				.send({ "username": testData.username, "password": testData.password })
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property("message").eql("Login Success.");
					done();
				});
		});
	});
});