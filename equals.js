export default function equals(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  return Object.keys(obj1).every((value) => {
    if (typeof obj1[value] !== 'object') {
      return obj2[value] === obj1[value];
    }
    return equals(obj1[value], obj2[value]);
  });
}
