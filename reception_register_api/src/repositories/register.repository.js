import {Register} from '../models';

/**
 * List All Register Entries By Date
 * @param {Object} filters
 * @return {Register[]}
 */
export async function registerListEntryRepository(filters) {
  const data = await Register.find(filters);
  return data;
}

/**
 * Create New Register Entry Repository
 * @param {Object} payload
 * @return {Register}
 */
export async function registerCreateEntryRepository(payload) {
  const entry = new Register(payload);
  const data = await entry.save();
  return data;
}

/**
 * Retrieve Existing Register Entry By ID
 * @param {String} id
 * @return {Register}
 */
export async function registerRetrieveEntryRepository(id) {
  const data = await Register.findById(id);
  return data;
}

/**
 * Retrieve Existing Register Entry By ID and Update
 * @param {String} id
 * @param {Object} payload
 * @return {Register}
 */
export async function registerUpdateEntryRepository(id, payload) {
  const data = await Register.findByIdAndUpdate(id, payload);
  return data;
}

/**
 * Retrieve Existing Register Entry By ID and Partial Update
 * @param {String} id
 * @param {Object} payload
 * @return {Register}
 */
export async function registerPartialUpdateEntryRepository(id, payload) {
  const data = await Register.findByIdAndUpdate(id, payload);
  return data;
}

/**
 * Retrieve Existing Register Entry By ID and Destroy
 * @param {String} id
 * @return {Object}
 */
export async function registerDestroyEntryRepository(id) {
  await Register.findByIdAndDelete(id);
  return {};
}
