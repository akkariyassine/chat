const DB_config = require("../models/index");
const DB_user = DB_config.DB.models.User;

exports.ADD_user = username => {
  const user = new DB_user(username, Math.random() * 10);
  user.save();
};
