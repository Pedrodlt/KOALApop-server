const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const multer = require('multer')

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

const storage = new CloudinaryStorage({ cloudinary })

module.exports = multer({ storage })

// const upload = multer({ storage }).array('imagenes', 5)  // 'imagenes' es el nombre del campo de entrada en el formulario y 5 es el límite de archivos

// module.exports = upload