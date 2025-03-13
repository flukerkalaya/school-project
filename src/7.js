// Example 1: Generating a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Example 2: Generating a random string of characters
function getRandomString() {
  const length = Math.floor(Math.random() * 10) + 5;
  let result = '';
  for (let i = 0; i < length; i++) {
    result += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  return result;
}
