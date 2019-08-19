const joi = require("joi");

exports.validateIdSchema = joi.object().keys({
  id: joi
    .string()
    .regex(
      /(^[a-z0-9]{8}[-][a-z0-9]{4}[-][a-z0-9]{4}[-][a-z0-9]{4}[-][a-z0-9]{12}$)/
    )
});
