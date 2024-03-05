/* Returns a resolved promise with an object containing firstName and lastName. */
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}
