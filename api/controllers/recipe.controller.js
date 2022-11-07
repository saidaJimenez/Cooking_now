const Recipe = require('../models/Recipe.model')


function getAllRecipes(req, res) {
    Recipe
        .find(req.query)
        .then((recipes) => res.json(recipes))
        .catch((err) => res.json(err))
}
function getRecipe(req, res) {
    Recipe
        .findById(req.params.id)
        .then(response => res.json(response))
        .catch(err => hadleError(err, res))
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
    Recipe.findByIdAndDelete(req.arams.id)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
}

module.exports = {
    getAllRecipes,
    getRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe
}
