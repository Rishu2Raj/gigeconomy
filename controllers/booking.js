const Booking = require("../models/booking");
const Razorpay = require("razorpay");


module.exports.createOrder = async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });
        const { amount, listingId } = req.body;

        const options = {
            amount: amount,
            currency: "INR",
            receipt: `receipt_order_${listingId}_${Date.now()}`
        };

        const order = await instance.orders.create(options);
        return res.json(order); // ✅ Always return JSON here
    } catch (err) {
        console.error("Razorpay order creation error:", err);
        return res.status(500).json({ error: "Something went wrong" }); // ✅ Return JSON not plain text
    }
};


module.exports.confirmOrder = async (req, res) => {
    const { paymentId, orderId, listingId } = req.query;
    const userId = req.user._id;

    const newBooking = new Booking({
        user: userId,
        listing: listingId,
        razorpay_payment_id: paymentId,
        razorpay_order_id: orderId
    });

    await newBooking.save();
    req.flash("success", "Booking confirmed successfully!");
    res.redirect("/bookings"); // or a success page
};


module.exports.dashboard = async (req, res) => {
    const bookings = await Booking.find({ user: req.user._id }).populate("listing");
    res.render("bookings/dashboard", { bookings });
};

module.exports.cancelBooking = async (req, res) => {
    await Booking.findByIdAndDelete(req.params.id);
    req.flash("success", "Booking cancelled successfully!");
    res.redirect("/bookings");
};