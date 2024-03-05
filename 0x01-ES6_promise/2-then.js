/* Appends three handlers to the provided promise */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(console.log('Got a response from the API'));
}
