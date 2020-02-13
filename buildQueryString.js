export default function bqs(obj) {
  if (typeof obj !== 'object') {
    throw new Error('function expects object');
  }
  const keys = Object.keys(obj).sort();
  let array;
  return keys.reduce((ac, value, index) => {
    array = `${ac}${index < 1 ? '?' : '&'}${value}=${obj[value]}`;
    return array;
  }, '');
}
