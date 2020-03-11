const readlineSync = require('readline-sync');
const { ConvertTemperature, ConvertLength } = require('./convert');

let select = readlineSync.question('Выберите вариант: \n 1-перевод температуры \n 2-перевод длины\n');
if (Number(select) == 1) {
    let temperatureC = readlineSync.question('Введите температуру по Цельсию: ');
    let temperature = new ConvertTemperature(temperatureC);
    temperature.convert();
} else if (Number(select) == 2) {
    let centimeters = readlineSync.question('Введите длину в сантиметрах: ');
    let Length = new ConvertLength(centimeters);
    Length.convert();
} else {
    console.log('Выбран неверный вариант!');
}


