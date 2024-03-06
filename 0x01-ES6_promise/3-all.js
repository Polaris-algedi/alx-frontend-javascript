/* Collectively resolves promises from uploadPhoto and createUser and logs the result */

import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  // Use Promise.all to wait for both promises to resolve
  return Promise.all([photoPromise, userPromise])
    .then((res) => (
      console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`)
    ))
    .catch(() => {
      console.error('Signup system offline');
    });
}
