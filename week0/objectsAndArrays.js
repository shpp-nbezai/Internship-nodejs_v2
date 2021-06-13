const obj = {
    a: 1,
    b: 2
};

// 1. Log count of keys in object
console.log('1: ', Object.keys(obj).length);

// 2. Create new object from "obj" and add to newly created param "c" with value "3".
// Original "obj" shouldn't be modified

const obj2 = JSON.parse(JSON.stringify(obj));;
obj2['c'] = 3;


console.log(obj); // output {a: 1, b: 2};
console.log(obj2); // should return {a: 1, b: 2, c: 3}

// 3.Check if is given input is array (Please, use more than one solution)
const input1 = 'array';
const input2 = ['array'];

console.log('3', Array.isArray(input1));
console.log('3.1', Array.isArray(input2));
console.log('3', input1.constructor === Array);
console.log('3.1', input2.constructor === Array);
console.log('3', input1 instanceof Array);
console.log('3.1', input2 instanceof Array);



// 4. Remove duplicates from array (Try to find more than one solution)
const array = ['A', 'B', 'A', 'C', 'B']; 

console.log('4:', array.filter((value, index) => array.indexOf(value) === index));
console.log('4:', [... new Set(array)]);
console.log('4:', Array.from(new Set(array)));

// 5. Merge two arrays, also remove duplicates
const array1 = ['A', 'B', 'F', 'C', 'B']; 
const array2 = ['A', 'D', 'E', 'D', 'F']; 

console.log('5', );

// 6. Write function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

console.log('6: ', yourFuncName([10, null, -12, false, undefined, '', 0, 234]));

// 7. Get random item from array
console.log('7:', getRandom([10, 22, 'Super', null, undefined, 0, false, 111]));

// 8. Sort the array in the ascending order

console.log('8: ', sort([11, 21, 13, 88, 2, 4, 77]));

/** 9. Get sorted array from 8 task, and write function, that creates object: 
 * {
 *     even: [88, 2, 4],
 *     odd: [11, 21, 13, 77]
 * }
 *  */ 

console.log('9: ',  yourFuncName(***));
