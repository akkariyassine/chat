const express = require("express");
const router = express.Router();
const User_controller = require("../controllers/User.controller");

// define the home page route

module.exports = function(io) {
  // can use io in here

  router.get("/", function(req, res) {
    console.log(io);
    res.send("it fucking works");
  });
  // define the add route
  router.get("/add", function(req, res) {
    User_controller.ADD_user("first one");
  });
  return router;
};
