export default function chunk(array, num) {
  if (!array.length) {
    throw new Error('function expects unempty array!!!');
  }
  if (num < 1) {
    throw new Error('function expects num >= 1!!!');
  }
  return array.reduce(
    (ac, value) => {
      if (ac[ac.length - 1].length < num) {
        ac[ac.length - 1].push(value);
        return ac;
      }
      ac.push([value]);
      return ac;
    },
    [[]],
  );
}
