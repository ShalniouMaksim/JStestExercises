export default function disemvowel(str) {
  const vowelsArray = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
  return str.split('').filter(currentValue => (!vowelsArray.includes(currentValue))).join('');
}
