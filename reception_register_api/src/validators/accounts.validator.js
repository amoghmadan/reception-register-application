import Joi from 'joi';

export const accountLoginValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required(),
});

export const createSuperUserValidator = Joi.object({
  email: Joi.string().email().required(),
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().min(1).required(),
  password: Joi.string().min(3).required(),
});
