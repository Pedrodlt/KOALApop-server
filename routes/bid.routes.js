const router = require("express").Router()

const { showBids, saveBid, auctionProduct } = require("../controllers/bid.controllers")
// const { isAuthenticated } = require("../middlewares/verifyToken.middleware")

router.get("/showBids", showBids)
router.post("/saveBid", /* isAuthenticated, */ saveBid)
router.put("/:product_id/auctionProduct",/*  isAuthenticated, */ auctionProduct)
// router.delete("/deleteProduct/:product_id", deleteProduct)

module.exports = router
