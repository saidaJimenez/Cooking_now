const router = require('express').Router()


const {
    getAllRecipes,
    getRecipe,
    getRecipeByDiet,
    getRecipeByIngredients,
    createRecipe,
    updateRecipe,
    deleteRecipe
    
} = require("../controllers/recipe.controller")


/*const {
    authAdmin,
    authUser} = require ("../utils")*/

router.get("/",getAllRecipes)
router.get("/diet",getRecipeByDiet)
router.get("/ingredients",getRecipeByIngredients)
router.get("/:id",getRecipe)
router.post("/",createRecipe)
router.put("/:id",updateRecipe)
router.delete("/:id",deleteRecipe)

module.exports = router