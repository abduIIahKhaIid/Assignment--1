/*
  Question#41
  Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
  which prints the name of each magician in the array.
*/

function show_magicians(magician: string[]): void {
    for (const i of magician) {
        console.log(i);
    }
}

let magician: string[] = ['Tahair', 'Huzaifa', 'Hafeez'];
show_magicians(magician);

export { }