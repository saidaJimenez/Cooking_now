const router = require('express').Router()

const {
    getAllIngredients,
    getIngredient,
    createIngredient,
    updateIngredient,
    deleteIngredient
} = require("../controllers/ingredient.controller")


const {
    authAdmin,
    authUser
} = require ("../utils")

router.get("/",authUser,getAllIngredients)
router.get("/:id",authUser,getIngredient)
router.post("/",authUser,authAdmin,createIngredient)
router.put("/:id",authUser,authAdmin,updateIngredient)
router.delete("/:id",authUser,authAdmin,deleteIngredient)
module.exports = router