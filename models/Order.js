const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    // products: [
    //   {
    //     productId: {
    //       type: String,
    //     },
    //     quantity: {
    //       type: Number,
    //       default: 1,
    //     },
    //   },
    // ],
    products: {type : Array, required: true},
    totalBill: { type: Number, required: true },
    nameReceiver: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    note: { type: String },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
