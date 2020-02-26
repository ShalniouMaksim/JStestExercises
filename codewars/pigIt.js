export default function pigIt(str) {
  const inputStr = str.split(' ');
  return inputStr.reduce((accumulator, currentValue, index) => {
    let accumOutput = accumulator;

    const regular = new RegExp(/[,.!?;:()]/);
    if (currentValue.match(regular)) {
      accumOutput += currentValue;
      return accumOutput;
    } accumOutput += currentValue.slice(1, currentValue.length);
    accumOutput += currentValue.slice(0, 1);
    if (index === inputStr.length - 1) {
      accumOutput += 'ay';
    } else accumOutput += 'ay ';

    return accumOutput;
  }, '');
}
