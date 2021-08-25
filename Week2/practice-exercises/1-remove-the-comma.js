/**
 * We want to remove the comma's in the given string (myString), replace them with a space and log it to the console.
 * 
 * The end result should be: 
 *   hello this is a difficult to read sentence
 */

let myString = 'hello,this,is,a,difficult,to,read,sentence';

// OPTION 1
myString = myString.split(',').join(' ');
console.log(myString);

// OPTION 2
/*
let re = /,/gi;
let newString = myString.replace(re, " ");
myString = newString;
*/

/* --- Code that will test your solution, do NOT change. Write above this line --- */

console.assert(myString === 'hello this is a difficult to read sentence', 'There is something wrong with your solution');