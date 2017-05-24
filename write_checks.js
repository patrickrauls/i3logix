let string_this_float = (float) => {
    let number = Math.abs(float),
        pennies = (number % 1).toFixed(2).slice(-2),
        dollars = (number % 1).toFixed(2) == 1 ? '' + (Math.floor(number) + 1) : '' + Math.floor(number),
        magnitude = dollars.length,
        periods = [],
        powers = ['', ' thousand', ' million'],
        tens = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    for (let i = magnitude; i > 0; i -= 3) {
        //chunking this into groups of three
        periods.unshift(dollars.substring(i, i - 3))
    }
    if (pennies == 0 && dollars == 0) {
        return 'Zero dollars';
    }
    let string_array = periods.map((period, index, array) => {
        if (period == 0) {
            return '';
        } else if (period < 10) {
            return units[period - 1] + powers[array.length - index - 1] + ' ';
        } else if (period < 20) {
            return teens[period - 10] + powers[array.length - index - 1] + ' ';
        } else if (period < 100 && period % 10 !== 0) {
            return tens[Math.floor(period / 10) - 2] + '-' + units[period[period.length - 1] - 1] + powers[array.length - index - 1] + ' ';
        } else if (period < 100) {
            return tens[Math.floor(period / 10) - 2] + powers[array.length - index - 1] + ' ';
        } else if (period % 100 > 19 && period % 10 === 0) {
            return units[period[0] - 1] + ' hundred ' + tens[period[1] - 2] + powers[array.length - index - 1] + ' ';
        } else if (period % 100 > 19) {
            return units[period[0] - 1] + ' hundred ' + tens[period[1] - 2] + '-' + units[period[2] - 1] + powers[array.length - index - 1] + ' ';
        } else if (period % 100 > 9) {
            return units[period[0] - 1] + ' hundred ' + teens[period % 100 - 10] + powers[array.length - index - 1] + ' ';
        } else if (period % 100 == 0) {
            return units[period[0] - 1] + ' hundred' + powers[array.length - index - 1] + ' ';
        } else {
            return units[period[0] - 1] + ' hundred ' + units[period % 100 - 1] + powers[array.length - index - 1] + ' ';
        }
    })
    let string = string_array.join('');
    //handle that negative
    if (dollars == 0) {
        string = 'zero and ' + pennies + '/100 dollars'
    } else if (pennies != 0) {
        string += 'and ' + pennies + '/100 dollars';
    } else {
        string += 'dollars'
    }

    if (float < 0) {
        string = 'negative ' + string;
    }

    string = string[0].toUpperCase() + string.slice(1);
    return string;
}

module.exports = {
    string_this_float: string_this_float
}