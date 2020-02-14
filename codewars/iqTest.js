export default function iqTest(numbers) {
  const inputArray = numbers.split(' ');
  const flag = inputArray.reduce((ac, val) => {
    if (val % 2) return ac + 1;
    return ac;
  }, 0);
  return (
    inputArray.findIndex((val) => {
      if (flag === 1) return val % 2;
      return !(val % 2);
    }) + 1
  );
}
