exports.validatePathParams = schema => (req, res, next) => {
  const result = schema.validate(req.params);
  console.log(result);

  if (!result.error) {
    return next();
  }

  res.status(404).json({ error: "invalid id" });
};
