const express = require("express");
const router = express.Router();
const LoginModel = require("../models/login");
const handleErrors = require("../utils/handleErrors");

router.post("/login", async (req, res) => {
  try {
    if (req?.body?.phonenumber.length >= 10) {
      const formData = await LoginModel.create({ ...req.body });
      return res.status(200).json({ success: true, data: formData });
    } else {
      return res
        .status(201)
        .json({ success: true, data: "Please provide correct credentials" });
    }
  } catch (error) {
    handleErrors(res, error);
  }
});

router.post("/otp", async (req, res) => {
  try {
    if ({ ...(req?.body?.otp === "12345") }) {
      return res.status(200).json({ success: true, data: formData });
    } else {
      return res.status(200).json({ success: true, data: formData });
    }
  } catch (error) {
    handleErrors(res, error);
  }
});

module.exports = router;
