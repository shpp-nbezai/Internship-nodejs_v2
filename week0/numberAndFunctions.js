
// 1. Write function to get random value in range from -100 to 100
const random = (num1, num2) => {
   return (Math.random() * (num2 - num1) + num1).toFixed(2);
};

console.log('1: ', random(-100, 100))

// 2. Write function to check is positive random number, 
const isPositive = (number) => {
    console.log('value: ', number);
   return number > 0;
};
console.log('2: ', isPositive(random(-100, 100)));
// output should be boolean

// 3. Write function, which create Array of random numbers. Array length = 6;
// Result of function should be sum of array elements
const ARRAY_LENGTH = 6;
const getArraySum = (array) => {
    for(var i=0; i < ARRAY_LENGTH; i++) {
        array.push(parseFloat(random(-100, 100)));    
    }
    console.log(array);
    return array.reduce((a, b) => a + b, 0);
};

console.log('3:', getArraySum([]));

// 4. Write function to create random color
const getRandomColor = () => {
    const COLOR_MIN_VALUE = 0;
    const COLOR_MAX_VALUE = 255;

    const getOneColor = ()  => { return parseInt(random(COLOR_MIN_VALUE, COLOR_MAX_VALUE))};
    return `rgb(${getOneColor()}, ${getOneColor()}, ${getOneColor()})`;
};
console.log('4: ', getRandomColor());
// output rgb(*, *, *);

// 5. Write function to find out if a number is a natural number or not
const isNatural = (number) => {
    if (typeof number !== 'number') 
        return 'Not a number'; 
			
	 return (number >= 0.0) && (Math.floor(number) === number) && number !== Infinity;
};
let testValuesArray = [10, 22, -23, 5.4];
testValuesArray.forEach((item) => {
    console.log('5: ', item + ' is natural = ', isNatural(item));
});


// 6. Create function isDivideBy(number, firstDivider, secondDivider). Check if an integer number is divisible by each out of two arguments

/**
 * (45, 1, 6)    ->  false
 * (45, 5, 15)   ->  true
 * 
 * (-12, 2, -6)  ->  true
 * (-12, 2, -5)  ->  false
 */
const isDivideBy = (number, firstDivider, secondDivider) => {
    return (number % firstDivider === 0 && number % secondDivider === 0);
};

console.log('6: ', isDivideBy(45, 1, 6));
console.log('6: ', isDivideBy(45, 5, 15));
console.log('6: ', isDivideBy(-12, 2, -6));
console.log('6: ', isDivideBy(-12, 2, -5));

