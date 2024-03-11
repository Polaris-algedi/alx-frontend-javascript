/* Returns a string of all the set values that start with a specific string (startString). */

export default function cleanSet(aSet, startString) {
  if (startString === '') {
    return '';
  }

  const filteredValues = Array.from(aSet)
    .filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length));

  return filteredValues.join('-');
}
