/*
  Question#3
  Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

let Name: string = "Abdullah khalid";
console.log(`Lower Case: ${Name.toLocaleLowerCase()}`);
console.log(`Upper Case ${Name.toUpperCase()}`);
let titleCase: string = Name.charAt(0).toUpperCase();
let check: boolean = false;
for (let i = 1; i < Name.length; i++) {
  if (Name[i] == " ") {
    check = true;
    titleCase += Name[i];
    continue;
  }
  if (check) {
    check=false;
    titleCase += Name[i].toUpperCase();
  }
  else {
    titleCase += Name[i].toLowerCase();
  }

}

console.log("Title Case: ", titleCase);

export { }