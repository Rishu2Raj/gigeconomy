const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const bookingController = require("../controllers/booking.js");
const {isLoggedIn} = require("../middleware.js");

// POST /bookings/order/:listingId
router.post('/order/:listingId', wrapAsync(bookingController.booking));

// POST /bookings/verify
router.post('/verify', wrapAsync(bookingController.bookingVerify));

// GET /bookings/success
router.get('/success', (req, res) => {
    res.render('includes/success.ejs');
});

// GET /bookings/failure
router.get('/failure', (req, res) => {
    res.render('includes/failure.ejs');
});

module.exports = router;
