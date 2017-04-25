let string_this_float = (float) => {
    let number = Math.abs(float),
        dollars = '' + Math.floor(number), //read somewhere coercion was faster than toString()
        pennies = (number % 1).toFixed(2).slice(-2),
        magnitude = dollars.length,
        periods = [],
        powers = [ '', 'thousand', 'million'], //this can be expanded for greater amounts
        tens = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    for (let i = magnitude; i > 0; i -= 3) {
        //chunking this into groups of three
        periods.unshift(dollars.substring(i, i - 3))
    }
    let string = periods.map((period, index, array) => {
        if (period < 10) { 
            return units[period - 1] + ' ' + powers[array.length - index - 1]
        } else if (period < 20) {
            return teens[period - 10] + ' ' + powers[array.length - index - 1]
        } else if (period < 100 && period % 10 !== 0) {
            return tens[period[0] - 2] + '-' + units[period[1] - 1] + ' ' + powers[array.length - index - 1]
        } else if (period < 100) {
            return tens[period[0] - 2] + ' ' + powers[array.length - index - 1]
        } else if (period % 100 > 19) {
            return units[period[0] - 1] + ' hundred ' + tens[period[1] - 2] + '-' + units[period[2] - 1] + ' ' + powers[array.length - index - 1]
        } else if (period % 100 > 9) {
            return units[period[0] - 1] + ' hundred ' + teens[period % 100 - 10] + ' ' + powers[array.length - index - 1]
        } else if (period % 100 == 0) {
            return units[period[0] - 1] + ' hundred ' + powers[array.length - index - 1]
        } else {
            return units[period[0] - 1] + ' hundred ' + units[period % 100 - 1] + ' ' + powers[array.length - index - 1]
        }
    }).join(' ');
    //handle that negative
    if (float < 0) {
      string = 'negative ' + string;
    }
    string += 'and ' + pennies + '/100 dollars';
    return string[0].toUpperCase() + string.slice(1);
}

string_this_float(31123503.43)