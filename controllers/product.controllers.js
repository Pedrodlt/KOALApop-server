const Product = require('../models/Product.model')

const getAllProducts = (req, res, next) => {

    Product
        .find()
        .select({ title: 1, image: 1 })
        .sort({ title: 1 })
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => next(err))
}

const getOneProduct = (req, res, next) => {

    const { product_id } = req.params

    Product
        .findById(product_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const saveProduct = (req, res, next) => {

    const { title, description, category, price, image } = req.body

    Product
        .create({ title, description, category, price, image })
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    getAllProducts,
    getOneProduct,
    saveProduct
}