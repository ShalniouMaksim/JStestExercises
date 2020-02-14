export default function uniqueInOrder(iterable) {
  return [...iterable].reduce((accumulator, currentValue) => {
    if (accumulator[accumulator.length - 1] !== currentValue) {
      return [...accumulator, currentValue];
    }
    return accumulator;
  }, []);
}
