"use strict";
let PersonName = "Abdullah Khalid";
let lowerCase = PersonName.toLowerCase();
console.log('Lower Case: ' + lowerCase);
let upperCase = PersonName.toUpperCase();
console.log('Upper Case: ' + upperCase);
let words = PersonName.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let titlecaseWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    titlecaseName += titlecaseWord + " ";
}
console.log('Title Case: ' + titlecaseName);
