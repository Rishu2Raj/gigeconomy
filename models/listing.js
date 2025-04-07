
const mongoose = require('mongoose');
const Review = require('./review');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    description: String,

    image: {
        url: String,
        filename: String,
     },

    price: {
        type: Number,
        required: true,
    },

    country: String,

    location: String,

    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],

    category: {
        type: String,
        enum: ["rooms", "cities", "castles", "pools", "camping", "farms", "mountains", "arctic", "beach"]
    },

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },

    geometry: {
        type: {
          type: String,
          enum: ['Point'],
          required: true,
        },
        coordinates: {
          type: [Number], // [lng, lat]
          required: true,
        },
    },
    
})

listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing){
        await Review.deleteMany({_id: {$in: listing.reviews}})
    }
});

//creating module
const Listing = mongoose.model('Listing', listingSchema);

//and exporting this model to app.js with
module.exports = Listing;