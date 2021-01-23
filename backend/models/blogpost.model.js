const { triggerAsyncId } = require("async_hooks");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    author: String,
    title: String,
    blogpost: String,
    img: String,
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
