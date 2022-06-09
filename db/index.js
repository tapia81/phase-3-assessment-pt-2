const mongoose = require("mongoose");
require("dotenv").config();

let MONGODB_URI =
  process.env.PROD_MONGODB ||
  process.env.MONGODB_URI ||
  "Your MONGOURI Address";

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Successfully Connected to MONGO Database"))
  .catch((err) => console.error("Connection Error", err.message));

let db = mongoose.connection;

module.exports = db;
