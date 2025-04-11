const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middleware");
const bookingController =  require("../controllers/booking.js");
const wrapAsync = require("../utils/wrapAsync.js");

router.post("/create-order", isLoggedIn, wrapAsync(bookingController.createOrder));

router.get('/confirm', wrapAsync(bookingController.confirmOrder));


// Show bookings dashboard
router.get("/", isLoggedIn, wrapAsync(bookingController.dashboard));

router.delete("/:id", isLoggedIn, wrapAsync(bookingController.cancelBooking));

module.exports = router;