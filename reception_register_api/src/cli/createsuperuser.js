import mongoose from 'mongoose';

import {User} from '../models';
import {MONGODB_URI} from '../settings';
import {createSuperUserValidator} from '../validators';

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
  const validatedData = await createSuperUserValidator.validateAsync(args);
  const newUser = new User({...validatedData, isAdmin: true});
  await mongoose.connect(MONGODB_URI);
  await newUser.save();
  console.info('Super User Created Successfully!');
  process.exitCode = 0;
}
