import Joi from 'joi';

export const registerCreateValidator = Joi.object({
  name: Joi.string().min(3).required(),
  company: Joi.string().min(3).required(),
  personToMeet: Joi.string().required(),
  mobile: Joi.number().min(10).required(),
  purpose: Joi.string().required(),
  in: Joi.date().required(),
  sign: Joi.string().min(3).required(),
  out: Joi.date(),
  securitySign: Joi.string(),
  remarks: Joi.string(),
});

export const registerUpdateValidator = Joi.object({
  name: Joi.string().min(3).required(),
  company: Joi.string().min(3).required(),
  personToMeet: Joi.string().required(),
  mobile: Joi.number().min(10).required(),
  purpose: Joi.string().required(),
  in: Joi.date().required(),
  sign: Joi.string().min(3).required(),
  out: Joi.date(),
  securitySign: Joi.string(),
  remarks: Joi.string(),
});

export const registerPartialUpdateValidator = Joi.object({
  name: Joi.string().min(3),
  company: Joi.string().min(3),
  personToMeet: Joi.string(),
  mobile: Joi.number().min(10).max(10),
  purpose: Joi.string(),
  in: Joi.date(),
  sign: Joi.string().min(3),
  out: Joi.date(),
  securitySign: Joi.string(),
  remarks: Joi.string(),
});
