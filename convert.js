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
module.exports = ConvertTemperature;