const Listing = require("../models/listing.js");
module.exports.index = async (req, res) => {
    const AllList = await Listing.find({}).limit(50).lean().exec();;
    res.render("./listings/index.ejs", { AllList });
  }

// all listings
module.exports.getalllistings = async (req, res) => {
    const listing = await Listing.findById(req.params.id).populate({
      path: "reviews",
      populate: {
        path : "author",
      }})
      .populate('owner');
    if(!listing){
      req.flash("error","Listing does not exists");
      res.redirect("/listings");
    }
    console.log(listing);
    res.render("./listings/show.ejs", { listing });
  }

// all listings created
module.exports.allposts = async (req, res, next) => {
    // if(!req.body.listings){
    //   throw new ExpressError(500,"Send valid data for listings");
    // }
    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listings);
    newListing.owner = req.user._id;  // adding user id to the listing owner field. req.user is an object which contains all the user details.
    newListing.image = {url,filename};
      // adding image url to the listing image field. req.file.path is the path of the uploaded image file. req.file.filename is the name of the uploaded image file.
    await newListing.save();
    req.flash("success","New Listing Created");
    res.redirect("/listings");
  }
// geteditpost

  module.exports.geteditpost = async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
        req.flash("error", "Listing does not exist");
        return res.redirect("/listings");
    }
    res.render("./listings/edit.ejs", { listing });
}

// puteditpost
module.exports.puteditpost = async (req, res) => {
    // if(!req.body.listings){
    //   throw new ExpressError(500,"Send valid data for listings");
    // }
   let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listings});

    if(typeof req.file !== "undefined"){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url, filename}

    await listing.save();
    }
    req.flash("success","Listing updated successfully");
    res.redirect("/listings");
  }
 // deletepost
module.exports.deletepost = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","Listing deleted successfully")
    res.redirect("/listings"); // redirect to all listings page after delete
  }

 