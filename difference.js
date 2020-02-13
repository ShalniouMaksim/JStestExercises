export default function difference(arrayone, arraytwo) {
  const arrayexp = [];
  for (let i = 0; i < arrayone.length; i += 1) {
    if (arraytwo.indexOf(arrayone[i]) === -1) {
      arrayexp.push(arrayone[i]);
    }
  }
  return arrayexp;
}
