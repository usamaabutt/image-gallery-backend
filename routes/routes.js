const express = require("express");
const Router = new express.Router();

const {
  createGalleryImage,
  getGallery,
  getSingleImage,
  createUser,
  getUser,
  getUsers,
} = require("../controller/controller");

Router.post("/add-image", createGalleryImage);
Router.get("/gallery", getGallery);
Router.get("/single-image/:id", getSingleImage);
Router.post("/create-user", createUser);
Router.get("/users", getUsers);
Router.get("/user/:id", getUser);

module.exports = Router;
