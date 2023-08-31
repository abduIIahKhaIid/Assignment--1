/*
  Question#24
  More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to 
  try more comparisons, write more tests. Have at least one True and one False result for each of the following:
*/

let Name: string = "Abdullah Khalid";
let no: number = 24;

//Tests for equality and inequality with strings
console.log(Name == 'Abdullah Khalid');
console.log(Name != "Abdullah Khalid");

//  Tests using the lower case function
console.log(Name == Name.toLowerCase());

/*Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
and less than or equal to*/
console.log(no == 24);
console.log(no != 24);
console.log(no > 20);
console.log(no < 20);
console.log(no >= 24);
console.log(no <= 20);

//Tests using "and" and "or" operators
console.log(no > 20 && no < 30);
console.log(no < 20 || no > 30);

//Test whether an item is in a array
let array: number[] = [1, 2, 3, 4];
console.log("1 in array", 1 in array);
console.log("5 in array ", 5 in array);

// Test whether an item is not in a array
console.log("5 not in array ", !(5 in array));
console.log("2 not in array", !(2 in array));


export { }