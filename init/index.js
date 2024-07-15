const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");
// app.set('views', path.join(__dirname, 'views'));
// app.set("view engine", "ejs");
main()
  .then(() => {
    console.log("Connected to MDB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDB = async () =>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data saved");

}

initDB();