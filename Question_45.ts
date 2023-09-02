/*
  Question#45
  Cars: Write a function that stores information about a car in a Object. The function should 
  always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword 
  arguments. Call the function with the required information and two other name-value pairs, such as a 
  color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/

type car = {
    manufacturer: string,
    model_name: string,
    [key: string]: any
}

function information(manufacturer: string, model_name: string, ...argument: [string, any][]): car {
    const Car: car = {
        manufacturer,
        model_name
    }

    for (const [key, value] of argument) {
        Car[key] = value;
    }

    return Car;
}



console.log(information('Toyota', 'Corolla', ['Color', 'Black'], ['Model', 2017]));

export { }