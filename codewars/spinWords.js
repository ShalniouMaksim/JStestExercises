export default function spinWords(inputStr) {
  return inputStr.split(' ').reduce((accumulator, currentValue) => {
    const ac = currentValue.length >= 5
      ? [...accumulator, [...currentValue].reverse().join('')]
      : [...accumulator, currentValue];
    return ac;
  }, []).join(' ');
}
