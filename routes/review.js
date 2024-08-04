const express = require('express');
const router = express.Router({ mergeParams: true });
const path = require("path");
const methodOverride = require("method-override");
const review = require("../models/review.js");

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview,isLoggedIn,isReviewAuthor} = require("../middleware.js")

const reveiwController = require("../controllers/reviews.js")
router.post('/',isLoggedIn,validateReview, wrapAsync(reveiwController.createReview));
   
  // Delete Review Post
  router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reveiwController.deleteReview))
  
  module.exports = router;