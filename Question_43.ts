/*
  Question#43
  Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of 
  the array of magicians’ names. Because the original array will be unchanged, return the new array and store 
  it in a separate array. Call show_magicians() with each array to show that you have one array of the original 
  names and one array with the Great added to each magician’s name.
*/

let magician: string[] = ['Tahir', 'Ali', 'Zeeshan'];

function make_great(magicians: string[]): string[] {
    let name: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        name[i] = `The Great ${magicians[i]}`;
    }
    return name;
}

function show_magicians(magicians: string[]): void {
    for (const i of magicians) {
        console.log(i);
    }
}

show_magicians(make_great(magician));

export { }