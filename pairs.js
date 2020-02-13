export default function pairs(...array) {
  return array.reduce((ac, pair) => {
    const arr = ac;
    const [key, value] = pair;
    arr[key] = value;
    return arr;
  }, {});
}
