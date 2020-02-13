export default function solution(number) {
  if (number < 1) return 0;
  const arr = new Array(number - 1).fill(1).map((a, i) => i + 1);
  let accumulatorSum = 0;
  return arr.reduce((accumulator, currentValue) => {
    if (!(currentValue % 3) || !(currentValue % 5)) accumulatorSum += currentValue;
    return accumulatorSum;
  }, 0);
}
