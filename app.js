const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require("./models/listing.js")
const path = require('path');

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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//index route
app.get('/listings', async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
})

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});