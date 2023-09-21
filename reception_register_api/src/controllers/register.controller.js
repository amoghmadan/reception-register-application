import {
  registerCreateEntryService,
  registerDestroyEntryService,
  registerListEntryService,
  registerPartialUpdateEntryService,
  registerRetrieveEntryService,
  registerUpdateEntryService,
} from '../services';

/**
 * List All Register Entries
 * @param {express.Request} request
 * @param {express.Response} response
 * @return {express.Response}
 */
export async function registerListEntryController(request, response) {
  const data = await registerListEntryService(request.query);
  return response.status(200).json(data);
}

/**
 * Create New Register Entry
 * @param {express.Request} request
 * @param {express.Response} response
 * @return {express.Response}
 */
export async function registerCreateEntryController(request, response) {
  try {
    const data = await registerCreateEntryService(request.body, request.user);
    return response.status(201).json(data);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return response.status(400).json(err);
    }
    throw err;
  }
}

/**
 * Retrieve Register Entry By ID
 * @param {express.Request} request
 * @param {express.Response} response
 * @return {express.Response}
 */
export async function registerRetrieveEntryController(request, response) {
  const data = await registerRetrieveEntryService(request.params.id);
  if (!data) return response.status(404).json('Not Found');
  return response.status(200).json(data);
}

/**
 * Retrieve Register Entry By ID and Update
 * @param {express.Request} request
 * @param {express.Response} response
 * @return {express.Response}
 */
export async function registerUpdateEntryController(request, response) {
  const obj = await registerRetrieveEntryService(request.params.id);
  if (!obj) return response.status(404).json('Not Found');
  try {
    const data = await registerUpdateEntryService(obj._id, request.body);
    return response.status(200).json(data);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return response.status(400).json(err);
    }
    throw err;
  }
}

/**
 * Retrieve Register Entry By ID and Partial Update
 * @param {express.Request} request
 * @param {express.Response} response
 * @return {express.Response}
 */
export async function registerPartialUpdateEntryController(request, response) {
  const obj = await registerRetrieveEntryService(request.params.id);
  if (!obj) return response.status(404).json('Not Found');
  try {
    const data = await registerPartialUpdateEntryService(obj._id, request.body);
    return response.status(200).json(data);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return response.status(400).json(err);
    }
    throw err;
  }
}

/**
 * Retrieve Register Entry By ID and Destroy
 * @param {express.Request} request
 * @param {express.Response} response
 * @return {express.Response}
 */
export async function registerDestroyEntryController(request, response) {
  const obj = await registerRetrieveEntryService(request.params.id);
  if (!obj) return response.status(404).json('Not Found');
  const data = await registerDestroyEntryService(obj._id);
  return response.status(204).json(data);
}
