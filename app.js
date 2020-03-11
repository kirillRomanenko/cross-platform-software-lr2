const readlineSync = require('readline-sync');
const ConvertTemperature = require('./convert');

let temperatureC = readlineSync.question('Введите температуру по Цельсию: ');
let temperature = new ConvertTemperature(temperatureC);
temperature.convert();

