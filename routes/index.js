const router = require("express").Router();

router.use("/users", require('./user.routes'))
router.use("/products", require('./products.routes'))
router.use("/bids", require('./bid.routes'))
router.use("/auth", require('./auth.routes'))
router.use("/upload", require('./upload.routes'))


module.exports = router