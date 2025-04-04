const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/user.js");

router.get("/signup", userController.renerSignupForm);

router.post("/signup", wrapAsync( userController.signup ));

router.get("/login", userController.renerLoginForm);

router.post("/login", saveRedirectUrl, passport.authenticate("local", { failureRedirect: '/login', failureFlash: true, }), userController.login);

router.get("/logout", userController.logout);

module.exports = router;