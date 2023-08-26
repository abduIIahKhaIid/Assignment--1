/*
  Question#16
  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
  • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

  • Add one new guest to the beginning of your array.

  • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
  • Print a new set of invitation messages, one for each person in your list.
*/

let guestList: string[] = ['Yaseen', 'Muzamil', 'Abdullah Tahir Malik'];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are invited to dinner at my place`);
}

console.log("We found a big dinner table ");

guestList.unshift('Umar');//Insert at the begining of the array
guestList.splice((guestList.length) / 2, 0, 'Ahmed Sajid Butt'); // Insert at the middle of the array
guestList.push('Muneeb');//Insert at the end of the array

for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are invited to dinner at my place`);
}

export { }