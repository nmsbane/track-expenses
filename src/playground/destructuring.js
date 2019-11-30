// Object destructruing

// const person = {
//   name: "bane",
//   age: 23,
//   location: {
//     city: "hyderabad",
//     temp: 96
//   }
// };

// // console.log(`${person.name} is ${person.age}`);
// // const name = person.name;
// // const age = person.age;

// const { name = "anonymous", age } = person;
// console.log(`${name} is ${age}`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`Its ${temperature} in ${city}`);
// }

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "self published" } = book.publisher;

// console.log(`${publisherName}`);

// Array Destructuring
// const address = ["1299 south", "seattle", "Washington", "18489"];

const address = ["1299 south", "seattle"];

const [, city, state = "new york"] = address;

console.log(`you are in ${city} ${state}`);

const item = ["Coffee", "$2", "$4", "$6"];

const [name, small, medium, large] = item;

console.log(`A medium ${name} costs ${medium}`);

console.log(`A small ${name} costs ${small}`);

console.log(`A large ${name} costs ${large}`);
