const Product = require('../models/Product.model')
const Bid = require('../models/Bid.model')
const User = require('../models/User.model')

// Bids LIST
const showBids = (req, res, next) => {

    Bid
        .find()
        .populate('owner')
        .then(response => res.json(response))
        .catch(err => next(err))
}

// Bid CREATE
const saveBid = (req, res, next) => {

    const { content, owner } = req.body

    Bid
        .create({ content, owner })
        .then(response => res.json(response))
        .catch(err => next(err))
}


const auctionProduct = (req, res, next) => {

    const { product_id } = req.params
    const { bid_id } = req.body;
    console.log(product_id, bid_id)

    Product
        .findByIdAndUpdate(product_id, { $push: { bids: bid_id } }, { new: true })
        .populate('owner')
        .then(response => {
            res.json(response)
        })
        .catch(err => next(err))
}

// BID DELETE
const deleteBid = (req, res, next) => {

    const { product_id } = req.params

    Bid
        .findByIdAndDelete(product_id)
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
}

module.exports = {
    showBids,
    saveBid,
    auctionProduct
}