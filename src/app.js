const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const jws = require("jsonwebtoken");
const morgan = require("morgan");

const LoginRoutes = require("./routes/Login");

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => console.log("Connected to Astrology database"))
  .catch((err) => console.error(err));

app.use("/user", LoginRoutes);

module.exports = app;
