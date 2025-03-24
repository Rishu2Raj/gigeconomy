const express = require('express');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const Listing = require("./models/listing.js")

const MONGO_URL = "mongodb://127.0.0.1:27017/gigeconomy";

main()
.then(() => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
})
async function main(){
    await mongoose.connect(MONGO_URL);
}

app.get('/', (req, res) => {
  res.send('Hello World');
});

// app.get('/testListing', async (req, res) => {
//     let sampleListing = new Listing({
//         title: "My Home",
//         description: "Best Home",
//         price: 5000,
//         location: "Mandawa",
//         country: "India"
//     })

//     await sampleListing.save();
//     console.log("Sample listing");
//     res.send("successful");
// })

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});