const handleErrors = (res, error) => {
  console.error("Error:", error);
  res
    .status(500)
    .json({ success: false, message: error ?? "Internal Server Error" });
};

module.exports = handleErrors;