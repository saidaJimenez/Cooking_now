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

router.get("/",getAllUsers)
router.get("/:id",getUser)
router.post("/",createUser)
router.put("/:id",authUser,authAdmin,updateUser)
router.delete("/:id",deleteUser)
module.exports = router