/*
  Question#44
  Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
  The function should have one parameter that collects as many items as the function call provides, and it 
  should print a summary of the sandwich that is being ordered. Call the function three times, using a different 
  number of arguments each time.
*/

function make_sandwich(...items: string[]) {
  if (items.length == 0) {
    console.log("No sandwich ordered");
  }
  else {
    console.log("You ordered an sandwitch:");
    for (const i of items) {
      console.log(i);
    }
  }
}

make_sandwich('Tomato', 'Mayo');
make_sandwich('Tomato', 'Mayo', 'Ketchup');
make_sandwich('Tomato', 'Mayo', 'Ketchup', 'Chicken');

export { }