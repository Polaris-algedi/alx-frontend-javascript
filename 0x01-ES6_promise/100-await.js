import { uploadPhoto, createUser } from './utils';

/* Calls uploadPhoto and createUser functions asynchronously
 * and returns an object with their responses
 * If one of the async functions fails, returns an empty object.
 */
async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto('photo-profile-1');
    const userPromise = createUser('Guillaume', 'Salva');

    // Use Promise.all to wait for both promises to resolve
    const [photoResponse, userResponse] = await Promise.all([photoPromise, userPromise]);

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
