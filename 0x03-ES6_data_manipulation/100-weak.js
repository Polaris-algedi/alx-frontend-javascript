/* Track within the weakMap the number of times queryAPI is called for each endpoint */

export const weakMap = new WeakMap();

export function queryAPI(endpointObj) {
  let countCalls = weakMap.get(endpointObj) ? weakMap.get(endpointObj) : 0;
  weakMap.set(endpointObj, countCalls += 1);

  if (countCalls >= 5) {
    throw new Error('Endpoint load is high');
  }
}
