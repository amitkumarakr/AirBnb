const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const ejsMate = require("ejs-mate");
const path = require("path");
const methodOverride = require("method-override");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("./Schema.js");
const Review = require("./models/review.js");
const review = require("./models/review.js");
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

main();
app.engine("ejs", ejsMate);
app.use(methodOverride("_method"));
// app.set("view engine", "views");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

// app.set('views', path.join(__dirname, 'views'));
// app.set("view engine", "ejs");


// const ValidateListing = (req, res, next) => {
//   const { error } = listingSchema.validate(req.body.listing);
//   if (error) {
//     const msg = error.details.map((el) => el.message).join(",");
//     throw new ExpressError(400,msg);
//   }
//   next();
// }


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
const valideReview = (req, res, next) =>{
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400,msg);
  }
  next();
}
app.get("/", (req, res) => {
  res.render("./listings/home.ejs");
});

app.use("/listings",listings); // all listings

app.use("/listings/:id/reviews",reviews);   // all reviews

// review
// Method Review post
// after checking all the roots if not found any valid route then
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
