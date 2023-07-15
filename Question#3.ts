let PersonName: string = "Abdullah Khalid";
let lowerCase: string = PersonName.toLowerCase();
console.log('Lower Case: ' + lowerCase);
let upperCase: string = PersonName.toUpperCase();
console.log('Upper Case: ' + upperCase);
let words: string[] = PersonName.split(" ");
let titlecaseName: string = "";
for (let i = 0; i < words.length; i++) {
  let word: string = words[i];
  let titlecaseWord: string = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  titlecaseName += titlecaseWord + " ";
}
console.log('Title Case: ' + titlecaseName);
