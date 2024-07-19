const express = require("express");
const Listing = require("../models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema} = require("../Schema.js");
const router = express.Router();

const ValidateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body.listing);
    if (error) {
      const msg = error.details.map((el) => el.message).join(",");
      throw new ExpressError(400,msg);
    }
    next();
  }
  
router.get("/", wrapAsync(async (req, res) => {
    const AllList = await Listing.find({}).limit(50).exec();;
    res.render("./listings/index.ejs", { AllList });
  }));
  router.get("/new", (req, res) => {
    res.render("./listings/new.ejs");
    // res.send("404 Not found");
  });
  router.get("/:id", wrapAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id).populate('reviews');
    res.render("./listings/show.ejs", { listing });
  }));
  router.post("/",ValidateListing, wrapAsync(async (req, res, next) => {
    // if(!req.body.listings){
    //   throw new ExpressError(500,"Send valid data for listings");
    // }
    const newListing = new Listing(req.body.listings);
    await newListing.save();
    res.redirect("/listings");
  
  }));
  router.get("/:id/edit", wrapAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    res.render("./listings/edit.ejs", { listing });
  }));
  router.put("/:id",ValidateListing, wrapAsync(async (req, res) => {
    if(!req.body.listings){
      throw new ExpressError(500,"Send valid data for listings");
    }
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, req.body.listings);
    res.redirect("/listings");
  }));
  router.delete("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings"); // redirect to all listings page after delete
  }));
  
  
  
  // review
  // Method Review post
  
  module.exports = router;