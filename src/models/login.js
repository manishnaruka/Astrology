const mongoose = require('mongoose')

const LoginSchema = new mongoose.Schema(
  {
    phonenumber: String,
    otp: String,
  },
  { _id: true }
)

const LoginModel = mongoose.models.adminlogin || mongoose.model('adminlogin', LoginSchema)

module.exports = LoginModel
