function doubleValues(arr) {
  const result = [];
  arr.forEach(num => result.push(num * 2));
  return result;
}
function onlyEvenValues(arr) {
  const result = [];
  arr.forEach(num => {
    if (num % 2 === 0) result.push(num);
  });
  return result;
}
function showFirstAndLast(arr) {
  const result = [];
  arr.forEach(str => {
    result.push(str[0] + str[str.length - 1]);
  });
  return result;
}
function addKeyAndValue(arr, key, value) {
  arr.forEach(obj => obj[key] = value);
  return arr;
}
function vowelCount(str) {
  const vowels = "aeiou";
  const result = {};

  str.toLowerCase().split("").forEach(char => {
    if (vowels.includes(char)) {
      result[char] = (result[char] || 0) + 1;
    }
  });

  return result;
}
