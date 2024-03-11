/* Returns an updated map for all items with initial quantity at 1 */

export default function updateUniqueItems(itemsMap) {
  if (!(itemsMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  return itemsMap.forEach((value, key) => {
    itemsMap.set(key, value === 1 ? 100 : value);
  });
}
