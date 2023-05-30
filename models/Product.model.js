const { Schema, model } = require("mongoose");

const productSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is mandatory']
        },
        description: {
            type: String,
            required: [true, 'Add description'],
            minlength: [20, 'Description must be at least 20 characters']
        },
        category: {
            type: String,
            required: [true, 'Add category'],
        },
        price: {
            type: Number,
            required: [true, 'Price is mandatory'],
        },
        // array en imagen
        image: {
            type: String,
            required: [true, 'Image must be added'],
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
