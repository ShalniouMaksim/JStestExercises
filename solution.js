export default function solution(inputStr) {
  const inputArray = inputStr.split('');
  let flag = 0;
  let acumStr = '';
  return inputArray.reduce((accumulator, currentValue) => {
    if (currentValue === '|') {
      flag = 1;
      acumStr += 1;
      return acumStr;
    }
    if (flag === 1) {
      flag = 0;
      return acumStr;
    }
    acumStr += 0;
    return acumStr;
  }, '');
}
