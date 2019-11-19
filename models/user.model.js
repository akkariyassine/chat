const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: String,
  id: String
});

UserSchema.pre("remove", function(next) {
  this.model("Message").deleteMany({ user: this._id }, next);
});

exports.User = mongoose.model("User", UserSchema);
