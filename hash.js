export default function hash(c) {
  const a = c.split('.');
  return a.reduce((accumulator, currentValue, iter) => {
    if (iter !== 0) {
      return accumulator[currentValue];
    }
    return this[currentValue];
  }, []);
}
