const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MDB");

    // Initialize the database after connection is established
    await initDB();
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    const dataWithOwner = initData.data.map((obj) => ({
      ...obj,
      owner: "66ac77630f096af52587887d",
    }));
    await Listing.insertMany(dataWithOwner);
    console.log("Data inserted:", dataWithOwner);
    console.log("Data saved");
  } catch (err) {
    console.error("Error initializing database:", err);
  }
};

// Initialize the database connection and setup
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
