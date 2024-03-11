/* Returns a new ArrayBuffer with an Int8 value at a specific position. */

export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);

  int8Array[position] = value;
  return int8Array;
}
