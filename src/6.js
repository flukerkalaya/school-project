const randomCode = () => {
  const codes = ['console.log("Hello World")', 'alert("Hello World")', 'document.write("Hello World")'];
  return codes[Math.floor(Math.random() * codes.length)];
}
