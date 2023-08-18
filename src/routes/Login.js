const express = require("express");
const router = express.Router();
const LoginModel = require("../models/login");
const handleErrors = require("../utils/handleErrors");

router.post("/", async (req, res) => {
  try {
    const formData = await LoginModel.create({ ...req.body });
    console.log("request body data", {...req.body});
    console.log("request formData formData", formData);
    return res.status(200).json({ success: true, data: formData });
  } catch (error) {
    handleErrors(res, error);
  }
});

module.exports = router;
