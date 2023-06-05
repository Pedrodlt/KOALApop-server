const router = require('express').Router()
const uploaderMiddleware = require('../middlewares/uploader.middleware')

router.post('/image', uploaderMiddleware.single('imageData'), (req, res) => {

    if (!req.file) {
        res.status(500).json({ errorMessage: 'Error caragndo el archivo' })
        return
    }

    res.json({ cloudinary_url: req.file.path })
})

router.post('/images', uploaderMiddleware.array('imagesData'), (req, res) => {

    if (!req.files || req.files.length === 0) {
        res.status(500).json({ errorMessage: 'Error caragndo el archivo' })
        return
    }

    const urls = req.files.map(file => file.path)

    res.json({ cloudinary_urls: urls })

    // console.log('LAS FILES', req.files)

    // res.json({ cloudinary_url: req.files.path })
})


module.exports = router