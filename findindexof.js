export default function findindexof(arr, num) {
  const mapp = arr.map(value => Math.abs(value - num));
  return mapp.indexOf(Math.min(...mapp));
}
