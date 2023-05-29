const { Schema, model } = require("mongoose");

const productSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'El nombre es obligatorio']
        },
        description: {
            type: String,
            required: [true, 'La descripción es obligatoria'],
            minlength: [20, 'La descripción debe tener min. 20 caracteres']
        },
        category: {
            type: String,
            required: [true, 'La Categoría es obligatoria'],
        },
        price: {
            type: Number,
            required: [true, 'El precio es obligatorio'],
        },
        image: {
            type: String,
            required: [true, 'La imagen es obligatoria'],
        },
        reviews: [{
            rate: Number,
            comment: String,
            owner: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        }],

        //SHIPMENT(envio de producto)

        //interesados

        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
);

const Product = model("Product", productSchema)
module.exports = Product
