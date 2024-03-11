/* Returns a boolean if all the elements in the array exist within the set. */

export default function hasValuesFromArray(aSet, anArray) {
  return anArray.every((item) => [...aSet].includes(item));
}
