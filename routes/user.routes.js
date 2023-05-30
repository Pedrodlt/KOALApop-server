const router = require("express").Router()

const { getAllUsers, getOneUser, editUser, deleteUser } = require("../controllers/user.controllers")

router.get("/getAllUsers", getAllUsers)
router.get("/getOneUser/:user_id", getOneUser)
router.put("/editUser", editUser)
router.delete("/deleteUser", deleteUser)

module.exports = router
