const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;
const getRandomLetter = () => String.fromCharCode('A'.charCodeAt(0) + Math.floor(Math.random() * 26));
const getRandomString = () => `${getRandomLetter()}${getRandomNumber()}`;
return getRandomString();
