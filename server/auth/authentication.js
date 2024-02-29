function validateHTTPMethods(req, res, next) {
  const validateMethods = ["GET", "POST", "PUT", "DELETE"];

  if (!validateMethods.includes(req.method)) {
    return res.status(400).json({ error: "Invalid HTTP method" });
  }

  next();
}

module.exports = {
  validateHTTPMethods,
};
