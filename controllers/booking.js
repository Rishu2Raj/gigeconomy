const Listing = require('../models/listing');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const Booking = require("../models/booking");
const nodemailer = require("nodemailer");
const {sendBookingEmail} = require('../utils/mailer');


const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

module.exports.booking = async (req, res) => {
    try {
        const {listingId} = req.params;
        console.log("listingId:" + listingId);
        const listing = await Listing.findById(listingId);
        
        const options = {
            amount: listing.price * 100,
            currency: "INR",
            receipt: `receipt_order_${Date.now()}`,
        };
        
        const order = await razorpay.orders.create(options);
        // ✅ Store info in session
        req.session.listingId = listing._id;
        req.session.amount = listing.price;
        
        res.json({
            success: true,
            order_id: order.id,
            key_id: process.env.RAZORPAY_KEY_ID,
            amount: options.amount,
            currency: options.currency,
            listing,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Order creation failed" });
    }
};


module.exports.bookingVerify = async (req, res) => {
    try {
        console.log("✅ /verify route hit!");

        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        console.log("Received Razorpay details:", {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        });

        // Check if user is logged in
        if (!req.user) {
            console.error("❌ User not logged in");
            return res.status(401).json({ success: false, message: "User not logged in" });
        }

        // Check if session data exists
        if (!req.session.listingId || !req.session.amount) {
            console.error("❌ Missing session data:", req.session);
            return res.status(400).json({ success: false, message: "Session data missing" });
        }

        // Signature verification
        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(sign)
            .digest("hex");

        if (expectedSignature !== razorpay_signature) {
            console.error("❌ Signature mismatch");
            return res.status(400).json({ success: false, message: "Invalid signature" });
        }

        // Save booking to DB
        const booking = new Booking({
            listing: req.session.listingId,
            user: req.user._id,
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            amount: req.session.amount,
            currency: "INR"
        });

        const savedBooking = await booking.save();
        console.log("✅ Booking saved successfully:", savedBooking);

        // Send confirmation email (optional error catch)
        // try {
        //     await sendBookingEmail(req.user.email, req.user.username, savedBooking);
        //     console.log("📧 Confirmation email sent to", req.user.email);
        // } catch (emailError) {
        //     console.warn("⚠️ Booking saved but email not sent:", emailError.message);
        // }

        return res.json({ success: true, booking: savedBooking });

    } catch (error) {
        console.error("❌ Error in bookingVerify:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
    }
};


module.exports.dashboard = async (req, res) => {
    const bookings = await Booking.find({ user: req.user._id }).populate('listing');
    res.render('bookings/dashboard', { bookings });
};