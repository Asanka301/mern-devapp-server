const mongoose = require("mongoose");
require("dotenv").config();

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.e17xkuu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const connectDB = async () => {
  try {
    //console.log("Mongo URI:", process.env.MONGO_URI);

    await mongoose.connect(uri, {});

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
