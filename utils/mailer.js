const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});

const sendBookingEmail = (email, name, booking) => {
    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: email,
        subject: "Booking Confirmed - Wanderlust",
        text: `Hi ${name},\n\nYour booking has been confirmed!\n\nDetails:\nListing ID: ${booking.listing}\nAmount Paid: ₹${booking.amount / 100}\n\nThank you for booking with Wanderlust!\n`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Email error:", error);
        } else {
            console.log("Confirmation email sent:", info.response);
        }
    });
};

module.exports = sendBookingEmail;
