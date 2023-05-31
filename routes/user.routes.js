const router = require("express").Router()

const { getAllUsers, getOneUser, editUser, deleteUser } = require("../controllers/user.controllers")

router.get("/getAllUsers", getAllUsers)
router.get("/getOneUser/:user_id", getOneUser)
router.put("/editUser/:user_id", editUser)
router.delete("/deleteUser/:user_id", deleteUser)

module.exports = router
