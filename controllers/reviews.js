const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
module.exports.createReview = async (req,res) =>{
    console.log("listing id: ",req.params.id);
    console.log(req.body)
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
        throw new ExpressError(404, 'Listing not found');
      }
    const newReview = new Review(req.body.review);
    newReview.author = req.user._id;  // adding user id to the review author field. req.user is an object which contains all the user details.
    await newReview.save();
    listing.reviews.push(newReview);  // add the review id to the listing's reviews array
    await listing.save();
    console.log("new review saved");
    // res.send("new review saved");
    req.flash('success','new review saved');
    res.redirect(`/listings/${listing._id}`);
  }

module.exports.deleteReview =  async (req, res) =>{
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    console.log("REview Deleted");
    req.flash('success','Review deleted');
    res.redirect(`/listings/${id}`);
  }