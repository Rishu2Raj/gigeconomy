const Listing = require("../models/listing.js");
const axios = require("axios");

module.exports.index = async (req, res) => {
    const category = req.query.category || "all";
    let allListings;
    if (category === "all") {
      allListings = await Listing.find({});
    } else {
      allListings = await Listing.find({ category });
    }

    res.render("listings/index.ejs", { allListings, selectedCategory: category });
};

module.exports.renderNewForm = (req, res) => {    
    res.render('listings/new.ejs');
};

module.exports.showListing = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path: "reviews", populate: {path: "author"}}).populate("owner");
    if(!listing){
        req.flash("error", "Listing you requested for does not exist!");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
    try {
      let url = req.file.path;
      let filename = req.file.filename;
  
      const maptilerApiKey = process.env.MAP_TOKEN;
      const locationQuery = req.body.listing.location;
  
      // Geocode location using MapTiler API
      const geoResponse = await axios.get(`https://api.maptiler.com/geocoding/${encodeURIComponent(locationQuery)}.json`, {
        params: {
          key: maptilerApiKey,
          limit: 1,
        },
      });
  
      const geoData = geoResponse.data;
  
      if (!geoData || !geoData.features || geoData.features.length === 0) {
        req.flash("error", "Location not found.");
        return res.redirect("/listings/new");
      }
  
      const coordinates = geoData.features[0].geometry.coordinates; // [lng, lat]
  
      const newListing = new Listing(req.body.listing);
      newListing.owner = req.user._id;
      newListing.image = { url, filename };
      newListing.geometry = {
        type: "Point",
        coordinates: coordinates,
      };
  
      await newListing.save();
      req.flash("success", "New listing created!");
      res.redirect("/listings");
    } catch (err) {
      console.error("Error in createListing:", err);
      req.flash("error", "Something went wrong while creating the listing.");
      res.redirect("/listings/new");
    }
  };

module.exports.renderEditForm = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    
    if(!listing){
        req.flash("error", "Listing you requested for does not exist!");
        res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url, filename};
        await listing.save();
    }
    req.flash('success', 'Listing Updated!');
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash('success', 'Listing Deleted!');
    res.redirect("/listings");
};