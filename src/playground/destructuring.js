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

const book = {
  title: "Ego is the enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "self published" } = book.publisher;

console.log(`${publisherName}`);
