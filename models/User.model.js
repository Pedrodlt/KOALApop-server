const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is mandatory'],
      minlength: [3, 'Username is too short']
    },
    avatar: {
      type: String,
      required: [true, 'Avatar is mandatory'],
      default: 'https://i.stack.imgur.com/l60Hf.png'

    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'

    },
    email: {
      type: String,
      required: [true, 'Email is mandatory.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is mandatory.']
    },
    followingProduct: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    followingUser: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    purchasedProduct: [{
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }],
    funds: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);
module.exports = User;
