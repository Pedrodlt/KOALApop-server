const Product = require('../models/Product.model')

// PRODUCT LIST
const getAllProducts = (req, res, next) => {

    Product
        .find()
        .select({ title: 1, image: 1 })
        .sort({ title: 1 })
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => next(err))
}

// PRODUCT DETAIL
const getOneProduct = (req, res, next) => {

    const { product_id } = req.params

    Product
        .findById(product_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

// PRODUCT CREATE
const saveProduct = (req, res, next) => {

    const { title, description, category, price, image } = req.body

    Product
        .create({ title, description, category, price, image })
        .then(response => res.json(response))
        .catch(err => next(err))
}

// PRODUCT EDIT
const editProduct = (req, res, next) => {

    const { product_id } = req.params
    const { title, description, category, price } = req.body

    if (req.file) {
        const { path: image } = req.file
        Product
            .findByIdAndUpdate(product_id, { title, description, category, price, image })
            .then(response => res.json(response))
            .catch(err => next(err))
    } else {
        Product
            .findByIdAndUpdate(product_id, { title, description, category, price })
            .then(response => res.json(response))
            .catch(err => next(err))
    }
}

// PRODUCT DELETE
const deleteProduct = (req, res, next) => {

    const { product_id } = req.params

    Product
        .findByIdAndDelete(product_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    getAllProducts,
    getOneProduct,
    saveProduct,
    editProduct,
    deleteProduct
}