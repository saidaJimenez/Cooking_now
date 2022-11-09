const router = require('express').Router()


const {
    getAllRecipes,
    getRecipe,
    getRecipeByDiet,
    getRecipeByIngredients,
    getRecipeByDish,
    createRecipe,
    updateRecipe,
    deleteRecipe
    
} = require("../controllers/recipe.controller")


const {
    authAdmin,
    authUser} = require ("../utils")

router.get("/",getAllRecipes)
router.get('/dish/:dish',authUser,getRecipeByDish)
router.get("/diet/:diet",authUser,getRecipeByDiet)
router.get("/ingredient",authUser,getRecipeByIngredients)
router.get("/:id",authUser,getRecipe)
router.post("/",authUser,authAdmin,createRecipe)
router.put("/:id",authUser,authAdmin,updateRecipe)
router.delete("/:id",authUser,authAdmin,deleteRecipe)

module.exports = router