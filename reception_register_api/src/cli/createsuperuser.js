import Joi from 'joi';
import mongoose from 'mongoose';

import {User} from '../models';
import {MONGODB_URI} from '../settings';

const createSuperUserSchema = Joi.object({
  email: Joi.string().email().required(),
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().min(1).required(),
  password: Joi.string().min(3).required(),
});

/**
 * Creates a new user.
 * @param {string} email associated with the user.
 * @param {string} firstName associated with the user.
 * @param {string} lastName associated with the user.
 * @param {string} password associated with the user.
 */
export default async function createSuperUser(
    email,
    firstName,
    lastName,
    password,
) {
  const args = {email, firstName, lastName, password};
  const validatedData = await createSuperUserSchema.validateAsync(args);
  const newUser = new User({...validatedData, isAdmin: true});
  await mongoose.connect(MONGODB_URI);
  await newUser.save();
}
