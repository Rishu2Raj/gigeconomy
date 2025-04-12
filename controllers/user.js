const User = require("../models/user.js")
const Listing = require("../models/listing.js")

module.exports.renerSignupForm = (req, res) => {
    res.render("users/signup.ejs");
}; 

module.exports.signup = async (req, res) => {
    try{
        let {username, email, password} = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if (err) { return next(err); }
            req.flash("success", "Welcome to WanderLust");
            res.redirect("/listings");
          });
    } catch(e){
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.renerLoginForm = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.login = async (req, res) => {
    let redirectUrl = res.locals.redirectUrl || "listings";
    req.flash("success", "Welcome back to WanderLust!");
    res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if(err){
            return next(err);
        }
        req.flash("success", "You are Logged Out!");
        res.redirect("/listings");
    })
};

module.exports.search = async (req, res) => {
    const query = req.query.q;
  
    if (!query) {
      req.flash("error", "Please enter a destination to search.");
      return res.redirect("/listings");
    }
  
    const regex = new RegExp(escapeRegex(query), 'i');
  
    const allListings = await Listing.find({
      $or: [
        { title: regex },
        { location: regex },
        { country: regex },
        { category: regex }
      ]
    });
  
    if (allListings.length === 0) {
      req.flash("error", "No matching listings found.");
    }
  
    res.render("listings/index", { allListings });
};


module.exports.searchSuggestion = async (req, res) => {
    const query = req.query.q;
    if (!query) return res.json([]);
    
    const regex = new RegExp(query, "i");
    const suggestions = await Listing.find({
      $or: [
          { title: regex },
          { location: regex },
          { country: regex },
          { category: regex }
        ]
    })
    .limit(5)
    .select("title location"); // send only necessary fields
    
    res.json(suggestions);
};

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}