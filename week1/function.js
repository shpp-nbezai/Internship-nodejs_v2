// 0. Create function that will accept (10, 20) params and return their sum.
// Main goal - use all possible variants to declare functions
function mySum() {
    const args = [...arguments];
    let result = 0;

    args.forEach(item => {
        result += item;
    });
    return result;
}

const mySum2 = function () {
    const args = [...arguments];
    let result = 0;

    args.forEach(item => {
        result += item;
    });
    return result;
};

console.log(mySum(1, 2, 3, 4, 5));
console.log(mySum2(3, 4, 5, 6, 7));
// 1. Create self-invoked anonymous function, that will return if the day after tomorrow is odd, or even.
// HINT: function accepts one argument: new Date(); 
// output example 15.06.2021, 11:19:22 is odd date
(function(date = new Date()) {
    const dayAfterTommorow = new Date(date);

    dayAfterTommorow.setDate(dayAfterTommorow.getDate() + 2);
    let dayType = dayAfterTommorow.getDay % 2 !== 0 ? 'odd' : 'even';

    console.log(`${dayAfterTommorow.toLocaleDateString()}, ${dayAfterTommorow.toLocaleTimeString()} is ${dayType} date`);
})();

// 2. Rewrite this function to ES6/ES2015

class Intern {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.homework = {
            status: 'Resolved',
            rating: '100%'
        }
    }
    getHomework() {
        return `${this.name} resolved homework with status ${this.homework.status}`;
    }
}

const testIntern = new Intern('niko', '33');

console.log(testIntern.getHomework());

// 3. Write multiply function. Two arguments - random numbers. But sometimes, we don't have second argument, and result is = random number * 12
// HINT: Read about default parameters in functions.

/**
 * example output
 * (19, 29) => 551
 * (23) => 276
 */
const myMultiply = (number1, number2 = 12) => {
    return number1 * number2;
}

console.log(myMultiply(19, 29));
console.log(myMultiply(23));
/**
 * Write function, that modify first argument to example output with delay 2 seconds
 * 
 * example:
 * yourFuncName({ a: 1, b: 2}, (data) => { console.log(data) }); output: { a: 2, b: 3 }
 * HINT: read about callbacks
 */

function yourFuncName(options, callback) {
    for(key in options) {
        options[key]++;
    }
    setTimeout(function() {
        callback(options);
    }, 2000);
}
yourFuncName({ a: 1, b: 2}, (data) => { console.log(data) });