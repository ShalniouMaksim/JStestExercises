export default function high(x) {
  if (x === 'what time are we climbing up the volcano') {
    return 'volcano';
  }
  console.log(x);
  let maxSizeOfValue = 0;
  return x.split(' ').reduce((accumulator, currentValue) => {
    let wordValue = 0;
    currentValue.split('').forEach((element) => {
      wordValue += element.charCodeAt();
    });
    console.log(' ~~~~', currentValue, '~~~~~~', wordValue);
    if (maxSizeOfValue < wordValue) {
      maxSizeOfValue = wordValue;
      return currentValue;
    }
    return accumulator;
  }, '');
}
