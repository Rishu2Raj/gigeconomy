const Listing = require('../models/listing');
const Razorpay = require('razorpay');
const crypto = require('crypto');

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

module.exports.booking = async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.listingId);
        const options = {
            amount: listing.price * 100,
            currency: "INR",
            receipt: `receipt_order_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);
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
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(sign)
        .digest("hex");

    if (expectedSignature === razorpay_signature) {
        // Save booking logic (optional)
        return res.json({ success: true });
    } else {
        return res.status(400).json({ success: false });
    }
};