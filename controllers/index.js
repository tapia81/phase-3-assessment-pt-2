const { findByIdAndDelete } = require("../models/recipe");
const LambRecipe = require("../models/recipe");

const createRecipe = async (req, res) => {
  try {
    const newRecipe = await new LambRecipe(req.body);
    await newRecipe.save();
    return res.status(200).json({ newRecipe });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const getAllRecipes = async (req, res) => {
  try {
    const lambrecipes = await LambRecipe.find();
    return res.status(200).json({ lambrecipes });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await LambRecipe.findById(id);
    if (recipe) {
      return res.status(200).json({ recipe });
    }
    return res.status(404).send("Recipe with that ID is not found");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const updateRecipe = (req, res) => {
  try {
    const { id } = req.params;
    LambRecipe.findByIdAndUpdate(id, req.body, { new: true }, (recipe, err) => {
      if (recipe) {
        return res.status(200).json({ recipe });
      } else if (err) {
        return res.status(500).send(err);
      }
      return res.status(404).send("Recipe with that ID is not found");
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRecipe = await LambRecipe.findByIdAndDelete(id);
    if (deletedRecipe) {
      return res.status(200).send("Recipe Deleted Successfully!!!");
    }
    throw new Error("Recipe with that ID is not found");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};
