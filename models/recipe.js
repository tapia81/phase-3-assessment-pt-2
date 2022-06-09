const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  title: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
  },
  origin_country: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    lowercase: true,
    trim: true,
    required: false,
  },
  picture: {
    type: String,
    lowercase: true,
    trim: true,
    required: false,
  },
});

const LambRecipe = mongoose.model("lambrecipes", RecipeSchema);

module.exports = LambRecipe;
