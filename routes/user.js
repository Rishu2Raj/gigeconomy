const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/user.js");

router
    .route("/signup")
    .get(userController.renerSignupForm)
    .post(wrapAsync( userController.signup ));

router
    .route("/login")
    .get(userController.renerLoginForm)
    .post(
        saveRedirectUrl,
        passport.authenticate("local", { failureRedirect: '/login', failureFlash: true, }),
        userController.login
    );

router.get("/logout", userController.logout);

router.get("/privacy", async (req, res) => {
    res.render("includes/privacy.ejs");
})

router.get("/terms", async (req, res) => {
    res.render("includes/terms.ejs");
})

router.get('/search', wrapAsync(userController.search));

router.get("/suggestions", wrapAsync(userController.searchSuggestion));

module.exports = router;