// instead of **** put your name and last name;

let firstName = '****;';
let lastName = '*****';
firstName = firstName.replace('****;', 'Niko');
lastName = lastName.replace('*****', 'Bezay');

// 1. concat first and last name, to create full name e.g (Vitalii Danchul)
let fullName = '';
fullName = `${firstName} ${lastName}`;
console.log('1: ', fullName);

// 2. log fullName third character. Please, use more than one solution
console.log('2.1: ', fullName[2]);
console.log('2.2: ', fullName.substring(2,3));
console.log('2.3: ', fullName.charAt(2));
console.log('2.4: ', fullName.slice(2,3));


// 3. replace all vowels in fullName with number
const number = 10;
const replaced = fullName.replace(/[aeiouyAEIOUY]/g, 10);

console.log('3: ', replaced);


// 4. check if replaced string on position 8 ends with number 10

console.log('4: ', (replaced.substring(8, 10) == '10'));

// 5. log part of fullName from 3 to 7 character

console.log('5: ', fullName.substring(2, 6));

// 6. Divide replaced string by number 10

console.log('6:', replaced.split('10'));

// 7. Write function capitalize(), to capitalize first letter of string 
const lowerCased = 'new york';
const capitalize = (message) => {
    if (message.length == 0) {
        return 'Error message is empty';
    }
    return message.charAt(0).toUpperCase() + message.slice(1);
}
console.log('7:', capitalize(lowerCased));

// 8. Write insert function, that will accept main string, string to insert and position to insert
// Change **** with your name 

const mainString = 'Hello, my name is ****, I want to learn Node.js';
const insert = (mainString, newValue, position) => {
    if (mainString.length == 0 || mainString.indexOf(position) == -1) {
        return 'Error, string is not valid';
    }
    return mainString.replace(position, newValue);
};
console.log('8:' , insert(mainString, fullName, '****'));

// 9. Write your own reverse() function. (do not use .reverse())
const reverse = (sourceString) => {
    return (sourceString === '') ? '' : reverse(sourceString.substr(1)) + sourceString.charAt(0);
}
console.log('9', reverse('my random string'));


