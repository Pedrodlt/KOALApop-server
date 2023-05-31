const router = require("express").Router()

const { getAllProducts, getOneProduct, saveProduct, editProduct, deleteProduct } = require("../controllers/product.controllers")
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")

router.get("/getAllProducts", getAllProducts)
router.get("/getOneProduct/:product_id", getOneProduct)
router.post("/saveProduct", isAuthenticated, saveProduct)
router.put("/editProduct", isAuthenticated, editProduct)
router.delete("/deleteProduct", deleteProduct)

module.exports = router
