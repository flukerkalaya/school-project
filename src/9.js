  const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };
  
  const generateCode = () => {
    let randomCode = "";
  
    for (let i = 0; i < 5; i++) {
      randomCode += getRandomInt(10);
    }
  
    return randomCode;
  };
  
  console.log(generateCode());