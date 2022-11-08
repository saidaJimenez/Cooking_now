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

/*
async function getRecipeByIngredients(req, res) {
    try{ const recipes = await Recipe.find().populate('ingredients')
        let result =[]
        recipes.forEach(recipe =>{
            recipe.ingredients.forEach(ingredient =>{
        if ( ingredient.name === req.query.name)
        result.push(recipe)


            }) 

            
        })}
        catch(err){ res.json(err)}
        
    
}
*/
/*function getRecipeByIngredientId(req, res) {
    Ingredient.findOne({name: req.params.name})
        .populate('ingredient')
      .then(recipe => {
        const ingredient = recipe.ingredient.name
        res.json(ingredient)
      })
      .catch((err) => res.json(err))
  }
  */
 /*function getRecipeByIngredientId(req, res){
      Recipe.findOne({ingredients:{ingredient:req.params.ingredient}})
          .populate('ingredients')
          .then(recipe => {
            const ingredient = recipe.ingredients.ingredient.name
            res.json(ingredient)
          })
          .catch((err) => res.json(err))

  }*/

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
    //getRecipeByIngredientId,
    getRecipeByDish
}
