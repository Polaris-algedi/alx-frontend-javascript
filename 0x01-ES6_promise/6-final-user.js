/* Handles the signup process by calling signUpUser and uploadPhoto functions */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  // Use Promise.allSettled to wait for both promises to settle
  return Promise.allSettled([signUpPromise, uploadPhotoPromise])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : String(result.reason),
    })));
}
