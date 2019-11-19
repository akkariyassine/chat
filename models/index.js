const mongoose = require("mongoose");
const User = require("./user.model");
const Message = require("./message.model");

const database_url = require("../env/env.preprod");

const connectDb = () => {
  return mongoose.connect(database_url.DATABASE_URL);
};
const models = { User, Message };
exports.DB = { models, connectDb };
