const router = require("express").Router()

const { getAllProducts, getOneProduct, saveProduct, editProduct, deleteProduct } = require("../controllers/product.controllers")

router.get("/getAllProducts", getAllProducts)
router.get("/getOneProduct/:product_id", getOneProduct)
router.post("/saveProduct", saveProduct)
router.put("/editProduct", editProduct)
router.delete("/deleteProduct", deleteProduct)

module.exports = router
