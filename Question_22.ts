/*
  Question#22
  Intentional Error: If you haven’t received an array index error in one of your programs yet, 
  try to make one happen. Change an index in one of your programs to produce an index error. 
  Make sure you correct the error before closing the program.
*/

let obj: { name: string, model: number }[] = [
    { name: "Honda", model: 2013 },
    { name: "Cultus", model: 2022 },
    { name: "Corolla", model: 2002 }
]

//Index Error
console.log(obj[3]);

//Error Correction
console.log(obj[2]);