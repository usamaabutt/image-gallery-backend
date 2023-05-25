const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: "String",
    required: true,
  },
  profileUrl: {
    type: "String",
    required: true,
  },
  bio: {
    type: "String",
    required: true,
  },
  images: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ImagesGallery ",
    },
  ],
});

const UserProfile = mongoose.model("Users ", userSchema);
module.exports = UserProfile;
