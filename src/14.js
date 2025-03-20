function getRandomColor() {
  var colors = ['red', 'green', 'blue'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getRandomQuote() {
  const quotes = ['"Life is like a box of chocolates, you never know what you are going to get."', '"The only way to do great work is to love what you do."'];
  return quotes[Math.floor(Math.random() * quotes.length)];
}
