class ConvertTemp {
    constructor(value) {
        this.value = Number(value);
    }
    convert() {
        let kelvin = (this.value + 273.15).toFixed(2);
        let fahrenheit = ((this.value * (9 / 5)) + 32).toFixed(2);
        console.log('Температура (по Цельсию): ', this.value);
        console.log('Температура (в Кельвинах): ', kelvin);
        console.log('Температура (по Фаренгейту): ', fahrenheit);
    }
}

class ConvertLen {
    constructor(value) {
        this.value = Number(value);
    }
    convert() {
        let meters = (this.value / 100).toFixed(5);
        let kilometers = (this.value / 100000).toFixed(5);
        let feet = (this.value / 30.48).toFixed(5);
        let inches = (this.value / 2.54).toFixed(5);
        let yards = (this.value / 91.44).toFixed(5);
        console.log('Длина (в сантиметрах): ', this.value);
        console.log('Длина (в метрах): ', meters);
        console.log('Длина (в километрах): ', kilometers);
        console.log('Длина (в футах): ', feet);
        console.log('Длина (в дюймах): ', inches);
        console.log('Длина (в ярдах): ', yards);
    }
}
module.exports = { ConvertTemp, ConvertLen }