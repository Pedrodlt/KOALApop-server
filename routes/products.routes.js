const router = require("express").Router()
const Product = require('../models/Product.model')

router.get("/getAllProducts", (req, res, next) => {

    Product
        .find()
        .select({ title: 1, image: 1 })
        .sort({ title: 1 })
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => next(err))
})


router.get("/getOneProduct/:products_id", (req, res, next) => {

    const { product_id } = req.params

    Product
        .findById(product_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.post("/saveProduct", (req, res, next) => {

    const { title, description, category, price, image } = req.body

    Product
        .create({ title, description, category, price, image })
        .then(response => res.json(response))
        .catch(err => next(err))
})

module.exports = router
