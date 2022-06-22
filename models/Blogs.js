const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String},
    author: { type: String, required: true },
    content: { type: String, required: true },
    tag: { type: String, required: true },
    desc: { type: String, required: true },
    view: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
