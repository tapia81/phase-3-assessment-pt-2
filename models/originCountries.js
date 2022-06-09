const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const originCountry = new Schema({
  name: {
    type: String,
    lowercase: true,
    trim: true,
    required: false,
  },
  country_flag: {
    type: String,
    lowercase: true,
    trim: true,
    required: false,
  },
  motto: {
    type: String,
    lowercase: true,
    trim: true,
    required: false,
  },
});

const origin = mongoose.model("origin", originCountry);

module.exports = origin;
