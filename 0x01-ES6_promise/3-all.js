/* Collectively resolves promises from uploadPhoto and createUser and logs the result */

import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  // Use Promise.all to wait for both promises to resolve
  return Promise.all([photoPromise, userPromise])
    .then(([photoResult, userResult]) => {
      console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
