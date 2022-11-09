const Recipe = require('../models/recipe.model')
const Ingredient = require('../models/ingredient.model')

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

// Query: ingredients me da los ingredientes que quiero buscar
async function getRecipeByIngredients(req, res) {
    try {
      // Separamos ingredientes de la query
      const ingredients = req.query.ingredients.split("&");
  
      // Construimos un array de objectIds de ingredientes
      const ingredientsIds = [];
      for (let i = 0; i < ingredients.length; i++) {
        let ing = await Ingredient.findOne({ name: ingredients[i] });
        if (ing) {
          ingredientsIds.push(mongoose.Types.ObjectId(ing.id));
        }
      }
  
      // Buscamos las recetas que tengan algun ingredientId dentro de su array de ingredients
      let recipes = await Recipe.find().elemMatch("ingredients", {
        ingredient: { $in: ingredientsIds },
      }).populate('ingredients.ingredient');
  
      return res.json(JSON.parse(JSON.stringify(recipes)));
    } catch (error) {
      console.error(err);
      return res.json(err);
    }
  }
    

  

  function getRecipeByDish(req, res) {
    Recipe
        .find({dishType:req.params.dish})
        .then((recipe) => res.json(recipe))
        .catch((err) => res.json(err));
}
function addComments(req, res){
    Recipe.findById(req.params.id)
    .then(recipe => {
        if (!recipe.comments){recipe.comments =[]}
        recipe.comments.push(req.body)
        recipe.save()
              .then(recipe => {
                 res.json(recipe)
              })
    })
    .catch((err)=> res.json(err))
}


module.exports = {
    getAllRecipes,
    getRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe,
    getRecipeByDiet,
    getRecipeByIngredients,
    getRecipeByDish
}
