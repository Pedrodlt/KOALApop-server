const { Schema, model } = require("mongoose");

const bidSchema = new Schema(
  {
    content: {
      type: String,
      required: [true, '...'],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    // productBidded: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Product'
    // }
  },
  {
    timestamps: true
  }
);

const Bid = model("Bid", bidSchema);
module.exports = Bid;
