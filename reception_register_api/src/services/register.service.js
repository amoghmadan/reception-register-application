import {
  registerCreateEntryRepository,
  registerDestroyEntryRepository,
  registerListEntryRepository,
  registerPartialUpdateEntryRepository,
  registerRetrieveEntryRepository,
  registerUpdateEntryRepository,
} from '../repositories';
import {
  registerCreateValidator,
  registerPartialUpdateValidator,
  registerUpdateValidator,
} from '../validators';

/**
 * List All Register Entries By Date
 * @param {Object} queryParams
 * @return {Register[]}
 */
export async function registerListEntryService(queryParams) {
  const filters = {user: user._id};
  let {date} = query;
  if (!date) {
    date = new Date().toISOString().split('T')[0];
  }

  filters.created = {
    $gte: new Date(`${date}T00:00:00Z`),
    $lte: new Date(`${date}T23:59:59Z`),
  };
  const data = await registerListEntryRepository(filters);
  return data;
}

/**
 * Create New Register Entry Repository
 * @param {Object} payload
 * @param {User} user
 * @return {Register}
 */
export async function registerCreateEntryService(payload, user) {
  const validatedData = await registerCreateValidator.validateAsync(payload);
  const data = await registerCreateEntryRepository({
    ...validatedData,
    user: user._id,
  });
  return data;
}

/**
 * Retrieve Existing Register Entry By ID
 * @param {String} id
 * @return {Register}
 */
export async function registerRetrieveEntryService(id) {
  const data = await registerRetrieveEntryRepository(id);
  return data;
}

/**
 * Retrieve Existing Register Entry By ID and Update
 * @param {String} id
 * @param {Object} payload
 * @return {Register}
 */
export async function registerUpdateEntryService(id, payload) {
  const validatedData = await registerUpdateValidator.validateAsync(payload);
  const data = await registerUpdateEntryRepository(id, validatedData);
  return data;
}

/**
 * Retrieve Existing Register Entry By ID and Partial Update
 * @param {String} id
 * @param {Object} payload
 * @return {Register}
 */
export async function registerPartialUpdateEntryService(id, payload) {
  const validatedData = await registerPartialUpdateValidator.validateAsync(
      payload,
  );
  const data = await registerPartialUpdateEntryRepository(id, validatedData);
  return data;
}

/**
 * Retrieve Existing Register Entry By ID and Destroy
 * @param {String} id
 * @return {Object}
 */
export async function registerDestroyEntryService(id) {
  const data = await registerDestroyEntryRepository(id);
  return data;
}
