/* Returns a string of all the set values that start with a specific string (startString). */

export default function cleanSet(aSet, aString) {
  let list = [];
  for (const item of aSet) {
    if (item.startsWith(aString) && aString) {
      list = [...list, item.slice(aString.length, item.length)];
    }
  }
  return list.join('-');
}
