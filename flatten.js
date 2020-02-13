function flattenHelper(nestedArray, ...reduceAccumulator) {
  if (!Array.isArray(nestedArray)) {
    return [...reduceAccumulator, nestedArray];
  }
  return reduceAccumulator.concat(nestedArray.reduce((accumulator, currentValue) => {
    if (!Array.isArray(currentValue)) {
      return [...accumulator, currentValue];
    }
    return flattenHelper(currentValue, ...accumulator);
  }, []));
}
// eslint-disable-next-line max-len
export default inputArray => inputArray.reduce((accumulator, currentValue) => flattenHelper(currentValue, ...accumulator), []);
