import {accountLoginRepository, accountLogoutRepository} from '../repositories';
import {accountLoginValidator} from '../validators';

/**
 * Perform Account Login
 * @param {Object} payload
 * @return {Object}
 */
export async function accountLoginService(payload) {
  const validatedData = await accountLoginValidator.validateAsync(payload);
  const token = await accountLoginRepository(validatedData);
  return token;
}

/**
 * Retrieve Account Detail
 * @param {User} user
 * @return {Object}
 */
export async function accountDetailService(user) {
  const detail = {
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    isAdmin: user.isAdmin,
    dateJoined: user.dateJoined,
  };
  return detail;
}

/**
 * Perform Account Login
 * @param {User} user
 * @return {Object}
 */
export async function accountLogoutService(user) {
  await accountLogoutRepository(user);
  return {};
}
