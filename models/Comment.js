const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    content: { type: String },
    star: { type: Number },
    author: { type: String },
    itemId: { type: String },
    category: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
