export default function findOdd(array) {
  const ar = array.reduce((ac, value) => {
    const arr = ac;
    arr[value] = Number.isNaN(Number.parseInt(arr[value], 10))
      ? 1
      : arr[value] + 1;
    return arr;
  }, {});
  return Number.parseInt(
    Object.keys(ar).filter((value) => {
      if (Number.parseInt(ar[value], 10) % 2 !== 0) {
        return ar[value];
      }
      return false;
    }),
    10,
  );
}
