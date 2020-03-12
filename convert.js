class ConvertTemperature {
    constructor(value) {
        this.value = Number(value);
    }
    convert() {
        let kelvin = this.value + 273.15;
        let fahrenheit = (this.value * (9 / 5)) + 32;
        console.log('Температура по Цельсию: ', this.value);
        console.log('Температура в Кельвинах: ', kelvin);
        console.log('Температура по Фаренгейту: ', fahrenheit);
    }
}

class ConvertLength {
    constructor(value) {
        this.value = Number(value);
    }
    convert() {
        let meters = this.value / 100;
        let kilometers = this.value / 100000;
        let feet = this.value / 30.48;
        let inches = this.value / 2.54;
        let yards = this.value / 91.44;
        console.log('Длина в сантиметрах: ', this.value);
        console.log('Длина в метрах: ', meters);
        console.log('Длина в километрах: ', kilometers);
        console.log('Длина в футах: ', feet);
        console.log('Длина в дюймах: ', inches);
        console.log('Длина в ярдах: ', yards);
    }
}
module.exports = { ConvertTemperature, ConvertLength }