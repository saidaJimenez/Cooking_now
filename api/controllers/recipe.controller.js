const Recipe = require('../models/Recipe.model')


function getAllRecipes(req, res) {
    Recipe
        .find()
        .then((recipes) => res.json(recipes))
        .catch((err) => res.json(err))
}
function getRecipe(req, res) {
    Recipe
        .findById(req.params.id)
        .then(response => res.json(response))
        .catch((err) => res.json(err))
}

function createRecipe(req, res) {
    Recipe.create(req.body)
        .then((recipe) => res.json(recipe))
        .catch((err) => res.json(err))
}
function updateRecipe(req, res) {
    Recipe.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json(err));
}
function deleteRecipe(req, res) {
    Recipe.findByIdAndDelete(req.params.id)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
}

function getRecipeByDiet (req,res){
    Recipe.find({diet: req.params.diet}) 
         .then((result) => res.json(result))
        .catch((err) => res.json(err))
}

function getRecipeByIngredients(req, res) {
    Recipe.find(req.query) 
         .then((result) => res.json(result))
        .catch((err) => res.json(err))
    
}
function getRecipeByIngredientId(req, res) {
    RecipeModel.findById(req.query)
      .then(recipe => {
        const ingredient = recipe.ingredients.id(req.query)
        res.json(ingredient)
      })
      .catch((err) => res.json(err))
  }
  function getRecipeByDish(req, res) {
    Recipe
        .find({dishType:req.params.dish})
        .then((recipe) => res.json(recipe))
        .catch((err) => res.json(err));
}



module.exports = {
    getAllRecipes,
    getRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe,
    getRecipeByDiet,
    getRecipeByIngredients,
    getRecipeByIngredientId,
    getRecipeByDish
}
