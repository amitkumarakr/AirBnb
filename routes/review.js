const express = require('express');
const router = express.Router({ mergeParams: true });
const path = require("path");
const methodOverride = require("method-override");
const review = require("../models/review.js");
const {reviewSchema} = require("../Schema.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const valideReview = (req, res, next) =>{
    const { error } = reviewSchema.validate(req.body);
    if (error) {
      const msg = error.details.map((el) => el.message).join(",");
      throw new ExpressError(400,msg);
    }
    next();
  }
router.post('/',valideReview, wrapAsync(async (req,res) =>{
    console.log("listing id: ",req.params.id);
    console.log(req.body)
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
        throw new ExpressError(404, 'Listing not found');
      }
    const newReview = new Review(req.body.review);
    await newReview.save();
    listing.reviews.push(newReview);  // add the review id to the listing's reviews array
    await listing.save();
    console.log("new review saved");
    // res.send("new review saved");
    res.redirect(`/listings/${listing._id}`);
  }));
   
  // Delete Review Post
  router.delete("/:reviewId", async (req, res) =>{
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    console.log("REview Deleted");
    res.redirect(`/listings/${id}`);
  })
  
  module.exports = router;