const Listing = require("./models/listing");
const ExpressError = require("./utils/ExpressError.js");
const {reviewSchema,listingSchema} = require("./Schema.js");
const review = require("./models/review.js");
module.exports.isLoggedIn = (req,res,next) =>{
    // console.log(req.user)// we can check , logged in or not
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","You must be logged in ");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req,res,next) =>{
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async (req, res,next) =>{
    let { id } = req.params;
    let listing = await Listing.findById(id);

    if(!listing.owner.equals(res.locals.currUser._id)){
      req.flash("error","You are not authorized Owner of this listing");
      return res.redirect(`/listings/${id}`);
        // return statement stops the function from executing the remaining code.
    }
    next();
}


module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, msg);
    }
    next();
};

module.exports.ValidateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body.listing);
    if (error) {
      const msg = error.details.map((el) => el.message).join(",");
      throw new ExpressError(400,msg);
    }
    next();
  }

  module.exports.isReviewAuthor = async (req, res,next) =>{
    let { id, reviewId } = req.params;
    let revieww = await review.findById(reviewId);

    if(!revieww.author.equals(res.locals.currUser._id)){
      req.flash("error","You are not authorized author of this Review");
      return res.redirect(`/listings/${id}`);
        // return statement stops the function from executing the remaining code.
    }
    next();
}