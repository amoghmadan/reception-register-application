import {
  accountDetailService,
  accountLoginService,
  accountLogoutService,
} from '../services';

/**
 * Perform Account Login
 * @param {express.Request} request
 * @param {express.Response} response
 * @return {express.Response}
 */
export async function accountLoginController(request, response) {
  const data = await accountLoginService(request.body);
  if (!data) {
    return response.status(401).json({detail: 'Invalid credentials!'});
  }
  return response.status(201).json(data);
}

/**
 * Retrieve User Details
 * @param {express.Request} request
 * @param {express.Response} response
 * @return {express.Response}
 */
export async function accountDetailController(request, response) {
  const data = await accountDetailService(request.user);
  return response.status(200).json(data);
}

/**
 * Perform Account Logout
 * @param {express.Request} request
 * @param {express.Response} response
 * @return {express.Response}
 */
export async function accountLogoutController(request, response) {
  const data = await accountLogoutService(request.user);
  return response.status(204).json(data);
}
