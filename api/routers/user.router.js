const router = require('express').Router()

const {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/user.controller")

const {
    authAdmin,
    authUser
} = require ("../utils")

router.get("/",authUser,authAdmin,getAllUsers)
router.get("/:id",authUser,authAdmin,getUser)
router.post("/",createUser)
router.put("/:id",authUser,updateUser)
router.delete("/:id",authUser,deleteUser)
module.exports = router