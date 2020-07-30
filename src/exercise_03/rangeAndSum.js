export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  const result = [];
  // eslint-disable-next-line prefer-const
  if (start <= end) {
    // eslint-disable-next-line no-plusplus
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  // eslint-disable-next-line no-plusplus
  for (let a = start; a > end; a--) {
    result.push(a);
  }
  return result;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (numbers === undefined) {
    return 0;
  }
  let total = 0;
  // eslint-disable-next-line no-plusplus
  for (let j = 0; j < numbers.length; j++) {
    total += numbers[j];
  }
  return total;
}
