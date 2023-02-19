function temperatureConverter(valNum) {
  let temperatureInCelcious = 0;
  temperatureInCelcious = (valNum-32)/1.8;
  let number = temperatureInCelcious.toFixed(2);
  return parseFloat(number);
}


console.log(temperatureConverter(103));