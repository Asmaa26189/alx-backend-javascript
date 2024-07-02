/**
 * each element in an array.
 * @param {Set} set
 * @param {*} array
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
