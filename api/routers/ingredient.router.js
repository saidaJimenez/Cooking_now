const router = require('express').Router()

const {
    getAllIngredients,
    getIngredient,
    createIngredient,
    updateIngredient,
    deleteIngredient
} = require("../controllers/ingredient.controller")


/*const {
    authAdmin,
    authIngredient
} = require ("../utils")
*/
router.get("/",getAllIngredients)
router.get("/:id",getIngredient)
router.post("/",createIngredient)
router.put("/:id",updateIngredient)
router.delete("/:id",deleteIngredient)
module.exports = router