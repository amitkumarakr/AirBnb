const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const ejsMate = require("ejs-mate");
const path = require("path");
const methodOverride = require("method-override");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema} = require("./Schema.js")
main()
  .then(() => {
    console.log("Connected to MDB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}
app.engine("ejs", ejsMate);
app.use(methodOverride("_method"));
app.set("view engine", "views");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

// app.set('views', path.join(__dirname, 'views'));
// app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("./listings/home.ejs");
});
const ValidateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400,msg);
  }
  next();
}
// app.get("/wanderlust", async (req, res) => {
//   let Listing2 = new Listing({
//     title: "Beautiful Buildings",
//     description:
//       "This is a beautiful building with a unique view",
//     image:
//       "https://plus.unsplash.com/premium_photo-1683917067889-c88599491d5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
//     price: 1500000,
//     location: "Mount Loutera",

//     country: "Australia",
//   });

//  await Listing2.save()
//   res.send("Data saved ");
// });

app.get("/listings", wrapAsync(async (req, res) => {
  const AllList = await Listing.find({});
  res.render("./listings/index.ejs", { AllList });
}));
app.get("/listings/new", (req, res) => {
  res.render("./listings/new.ejs");
  // res.send("404 Not found");
});
app.get("/listings/:id", wrapAsync(async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  res.render("./listings/show.ejs", { listing });
}));
app.post("/listings",ValidateListing, wrapAsync(async (req, res, next) => {
  // if(!req.body.listings){
  //   throw new ExpressError(500,"Send valid data for listings");
  // }
  const newListing = new Listing(req.body.listings);
  await newListing.save();
  res.redirect("/listings");

}));
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  res.render("./listings/edit.ejs", { listing });
}));
app.put("/listings/:id",ValidateListing, wrapAsync(async (req, res) => {
  if(!req.body.listings){
    throw new ExpressError(500,"Send valid data for listings");
  }
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, req.body.listings);
  res.redirect("/listings");
}));
app.delete("/listings/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings"); // redirect to all listings page after delete
}));

//after checking all the roots if not found any valid route then
app.all("*",(req, res, next) =>{
  next(new ExpressError(404,"Page Not Found"));
})
// Middleware 
app.use((err,req,res,next) =>{
  let {statusCode=500, message="Something went wrong"} = err;
  res.status(statusCode).render("error.ejs",{err});
  // res.status(statusCode).send(message);
})
app.listen(3000, (req, res) => {
  console.log("Server is listening on the port: 3000");
});
