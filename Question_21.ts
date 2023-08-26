/*
  Question#21
  They think of something you could store in a TypeScript Object. 
  Write a program that creates Objects containing these items.
*/

let obj: { title: string, author: string, year: number }[] = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
    }
]

console.log("Array of object", obj);

export { }