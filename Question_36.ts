/*
  Question#36
  T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that 
  should be printed on the shirt. The function should print a sentence summarizing the size of the shirt 
  and the message printed on it. Call the function.
*/

function make_shirt(size: number, text: string) {
    console.log(`The shirt size is ${size}, and the text of a message: ${text}`);
}

make_shirt(20, 'I love Pakistan');

export { }