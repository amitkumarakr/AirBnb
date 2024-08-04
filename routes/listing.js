const express = require("express");
const Listing = require("../models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../Schema.js");
const router = express.Router();
const { isLoggedIn, isOwner, ValidateListing } = require("../middleware.js"); //In Express.js, {} can be used to define route parameters and in middleware for object manipulation:
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudconfig.js");
const upload = multer({ storage });

router.get("/", wrapAsync(listingController.index));
router.get("/new", isLoggedIn, (req, res) => {
  // console.log(req.user);   // to see all the details of the user
  res.render("./listings/new.ejs");
  // res.send("404 Not found");
});
router.get(
  "/:id",
  isLoggedIn,
  ValidateListing,
  wrapAsync(listingController.getalllistings)
);
router.post(
  "/",
  isLoggedIn,
  upload.single("listings[image]"),
  ValidateListing,
  wrapAsync(listingController.allposts)
);

router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.geteditpost)
);
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  upload.single("listings[image]"),
  ValidateListing,
  wrapAsync(listingController.puteditpost)
);
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.deletepost)
);

// review
// Method Review post

module.exports = router;
