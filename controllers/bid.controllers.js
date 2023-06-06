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
    console.log(content, owner, '1231231231312312312312312312313131231312312312313123123')

    // const { _id: owner } = req.payload
    // const { product_id } = req.params

    Bid
        .create({ content, owner })
        .then(response => res.json(response))
        .catch(err => next(err))
}


const auctionProduct = (req, res, next) => {

    const { product_id } = req.params
    const { bid_id } = req.body;
    // const { _id: user_id } = req.payload
    console.log(product_id, bid_id)

    Product
        .findByIdAndUpdate(product_id, { $push: { bids: bid_id } }, { new: true })
        .then(response => {
            res.json(response)
        })
        .catch(err => next(err))

    // const promises = [
    //     Product.findByIdAndUpdate(product_id, { $addToSet: { bids: bid_id } }, { new: true }),
    //     Bid.findByIdAndUpdate(bid_id, { $addToSet: { productBidded: product_id } }, { new: true })
    // ]

    // Promise
    //     .all(promises)
    //     .then(responses => {
    //         console.log('EL PRDUCTO ACTUALIZADO:', responses[0])
    //         console.log('EL USUARIO ACTUALIZADO:', responses[1])
    //         res.json(responses)
    //     })
    //     .catch(err => next(err))

}

// BID DELETE
const deleteBid = (req, res, next) => {

    const { product_id } = req.params

    Bid
        .findByIdAndDelete(product_id)
        .then(() => res.sendStatus(204))
        // TODO: REVISAR OTROS CASOS RESOLUVLES CON EL ENVÍO DE UN ESTADO
        .catch(err => next(err))
}

module.exports = {
    showBids,
    saveBid,
    auctionProduct
}