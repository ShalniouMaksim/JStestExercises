export default function rgb(r, g, b) {
  function normalizeInput(Value) {
    if (Value > 255) return 255;
    if (Value < 0) return 0;
    return Value;
  }
  function toHex(rgbValue) {
    return Number.parseInt(rgbValue, 10).toString(16).toUpperCase();
  }
  function checkOutput(inputValue) {
    return (toHex(inputValue).length === 2) ? toHex(inputValue) : `0${toHex(inputValue)}`;
  }
  return checkOutput(normalizeInput(r))
 + checkOutput(normalizeInput(g))
 + checkOutput(normalizeInput(b));
}
