const router = require("express").Router()

const { getAllProducts, getOneProduct, saveProduct } = require("../controllers/product.controllers")

router.get("/getAllProducts", getAllProducts)
router.get("/getOneProduct/:product_id", getOneProduct)
router.post("/saveProduct", saveProduct)

module.exports = router
