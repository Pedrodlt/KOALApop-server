const router = require("express").Router();

router.use("/products", require('./products.routes'))
router.use("/auth", require('./auth.routes'))
router.use("/upload", require('./upload.routes'))


module.exports = router