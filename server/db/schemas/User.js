const mongoose = require("mongoose");

// > 우선은 bcrypt 없이 사용자 스키마 만들기
const userSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    maxlength: 20,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
});
const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };
