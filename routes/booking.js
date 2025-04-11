const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const bookingController = require("../controllers/booking.js");
const {isLoggedIn} = require("../middleware.js");

// POST /bookings/order/:listingId
router.post('/order/:listingId', wrapAsync(bookingController.booking));

// POST /bookings/verify
router.post('/verify', wrapAsync(bookingController.bookingVerify));

router.get('/my', wrapAsync(bookingController.dashboard));


// GET /bookings/success
router.get('/success', (req, res) => {
    req.flash("success", "payment successfull!")
    res.render('bookings/dashboard.ejs');
});

// GET /bookings/failure
router.get('/failure', (req, res) => {
    res.render('bookings/dashboard.ejs');
});

module.exports = router;
