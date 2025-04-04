const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/user.js");

router.route("/signup")
.get(userController.renerSignupForm)
.post(wrapAsync( userController.signup ));

router.route("/login")
.get(userController.renerLoginForm)
.post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: '/login', failureFlash: true, }), userController.login);

router.get("/logout", userController.logout);

module.exports = router;