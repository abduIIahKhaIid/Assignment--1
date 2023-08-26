/*
  Question#13
  Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
  and make a list that stores several examples. Use your list to print a series of statements about these items, 
  such as “I would like to own a Honda motorcycle.”
*/

let favoriteModeOfTransportation: string[] = ['Car', 'Motorcycle', 'Flying jet'];
for (let i = 0; i < favoriteModeOfTransportation.length; i++) {

    console.log(`I would like to own a ${favoriteModeOfTransportation[i]}`);
}

export { }