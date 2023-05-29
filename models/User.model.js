const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'El nombre de usuario es obligatorio'],
      minlength: [3, 'El nombre de usuario es demasiado corto']
    },
    avatar: {
      type: String,
      required: [true, 'El avatar de usuario es obligatorio'],
      default: 'https://i.stack.imgur.com/l60Hf.png'

    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'

    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    products: [{
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }],
    following: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);
module.exports = User;
