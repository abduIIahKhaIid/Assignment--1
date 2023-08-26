/*
  Question#19
  Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
  print a message indicating the number of people you are inviting to dinner.
*/

let guestList: string[] = ['Yaseen', 'Abdullah Tahir Malik', 'Umar Tariq'];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]} you are invited to dinner at my place. It would be an honor to have you join us.`)
}

console.log(`The total number of people that you are invited to dinner is ${guestList.length}`);

export { }