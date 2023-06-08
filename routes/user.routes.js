const router = require("express").Router()

const { getAllUsers, getOneUser, editUser, deleteUser, getOneUserFunds } = require("../controllers/user.controllers")
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")

router.get("/getAllUsers", getAllUsers)
router.get("/getOneUser/:user_id", getOneUser)
router.put("/getOneUserFunds", isAuthenticated, getOneUserFunds)

router.put("/editUser/:user_id", isAuthenticated, editUser)
router.delete("/deleteUser/:user_id", deleteUser)

module.exports = router
