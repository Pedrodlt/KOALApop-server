const Product = require('../models/Product.model')
const Bid = require('./../models/Bid.model')
const User = require('./../models/User.model')

// PRODUCT LIST
const getAllProducts = (req, res, next) => {

    Product
        .find()
        // .select({ title: 1, image: 1, owner: 1 })
        .populate('owner')
        .then(response => res.json(response))
        .catch(err => next(err))
}

// PRODUCT clothing LIST
const getAllProductsSorted = (req, res, next) => {

    Product
        .find()
        .sort({ category: 1 })
        .populate('owner')
        .then(response => res.json(response))
        .catch(err => next(err))
}

// PRODUCT DETAIL
const getOneProduct = (req, res, next) => {

    const { product_id } = req.params

    Product
        .findById(product_id)
        .populate('owner')
        .populate({
            path: 'bids',
            model: 'Bid',
            populate: {
                path: 'owner',
                model: 'User'
            },
            options: {
                sort: { createdAt: 'desc' },
            },
        })
        .then(response => res.json(response))
        .catch(err => next(err))
}

// PRODUCT CREATE
const saveProduct = (req, res, next) => {

    const { title, description, category, price, image } = req.body
    const { _id: owner } = req.payload

    Product
        .create({ title, description, category, price, image, owner })
        .then(response => res.json(response))
        .catch(err => next(err))
}

// PRODUCT EDIT
const editProduct = (req, res, next) => {

    const { product_id } = req.params
    const { title, description, category, price, image, buyerInfo, bought } = req.body  // OJO IMAGE

    Product
        .findByIdAndUpdate(product_id, { title, description, category, price, image, buyerInfo, bought })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const acceptBid = (req, res, next) => {

    const { product_id } = req.params
    const { user_id } = req.body

    const promises = [
        Product.findByIdAndUpdate(product_id, { bought: true }, { new: true }),
        User.findByIdAndUpdate(user_id, { $addToSet: { purchasedProduct: product_id } }, { new: true })
    ]

    Promise
        .all(promises)
        .then(responses => {
            res.json(responses)
        })
        .catch(err => next(err))

}
const denyBid = (req, res, next) => {

    const { product_id } = req.params
    const { bidID } = req.body

    Product
        .findByIdAndUpdate(product_id, { $pull: { bids: bidID } }, { new: true })
        .populate('owner')
        .populate({
            path: 'bids',
            model: 'Bid',
            populate: {
                path: 'owner',
                model: 'User'
            },
            options: {
                sort: { createdAt: 'desc' },
            },
        })
        .then(responses => {
            res.json(responses)
        })
        .catch(err => next(err))

}


const buyProduct = (req, res, next) => {

    const { product_id } = req.params
    const { fullName, email, address } = req.body;
    const { _id: user_id } = req.payload

    const promises = [
        Product.findByIdAndUpdate(product_id, { buyerInfo: { fullName, email, address }, bought: true }, /* { buyerInfo }, */ { new: true }),
        User.findByIdAndUpdate(user_id, { $addToSet: { purchasedProduct: product_id } }, { new: true })
    ]

    Promise
        .all(promises)
        .then(responses => {
            console.log('EL PRDUCTO ACTUALIZADO:', responses[0])
            console.log('EL USUARIO ACTUALIZADO:', responses[1])
            res.json(responses)
        })
        .catch(err => next(err))

}

// PRODUCT DELETE
const deleteProduct = (req, res, next) => {

    const { product_id } = req.params

    Product
        .findByIdAndDelete(product_id)
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
}

module.exports = {
    getAllProducts,
    getAllProductsSorted,
    getOneProduct,
    saveProduct,
    editProduct,
    deleteProduct,
    buyProduct,
    acceptBid,
    denyBid
}