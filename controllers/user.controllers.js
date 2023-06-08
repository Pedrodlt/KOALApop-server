const User = require('../models/User.model')

// USER LIST
const getAllUsers = (req, res, next) => {

    User
        .find()
        // TODO: SELECT 
        .then(response => res.json(response))
        .catch(err => next(err))
}

// USER DETAIL
const getOneUser = (req, res, next) => {


    const { user_id } = req.params

    User
        .findById(user_id)
        .populate('purchasedProduct')
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getOneUserFunds = (req, res, next) => {


    const { _id } = req.payload
    const { bidData, userFunds } = req.body
    const { content, owner } = bidData

    let updatedFunds = userFunds - content

    console.log('------------------22222222222222-------------------------', userFunds, content)

    User
        .findByIdAndUpdate(_id, { funds: updatedFunds })
        .then(response => res.json(response))
        .catch(err => next(err))

}




// USER EDIT
const editUser = (req, res, next) => {

    const { user_id } = req.params
    let { username, email, avatar, funds, content: newFund } = req.body // OJO AVATAR


    User
        .findByIdAndUpdate(user_id, { username, email, avatar, funds })
        .then(response => res.json(response))
        .catch(err => next(err))

    // if (req.file) {
    //     const { path: avatar } = req.file
    //     User
    //         .findByIdAndUpdate(user_id, { username, email, avatar })
    //         .then(response => res.json(response))
    //         .catch(err => next(err))
    // } else {
    //     User
    //         .findByIdAndUpdate(user_id, { username, email, })
    //         .then(response => res.json(response))
    //         .catch(err => next(err))
    // }
}

// USER DELETE
const deleteUser = (req, res, next) => {

    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    getAllUsers,
    getOneUser,
    editUser,
    deleteUser,
    getOneUserFunds
}