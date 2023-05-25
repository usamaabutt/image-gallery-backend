const mongoose = require("mongoose");

const imagesSchema = new mongoose.Schema({
  imgTitle: {
    type: "String",
    required: true,
  },
  imgUrl: {
    type: "String",
    required: true,
  },
  type: {
    type: Boolean,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users ",
  },
});

const ImgGallery = mongoose.model("ImagesGallery ", imagesSchema);
module.exports = ImgGallery;
