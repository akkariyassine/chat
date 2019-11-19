const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  content: String,
  id: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

exports.Message = mongoose.model("Message", MessageSchema);
