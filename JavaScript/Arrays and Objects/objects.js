  //These objects are also called dictionaries in Python

const person = {
  name: "Alice",
  age: 25,
  city: "New York",
};

console.log(person);

console.log(person.name);
// console.log(person.city);
console.log(person["age"]); // pretty much the same as person.name, just different syntax

person.county = "USA"; // we added .country as a property
console.log(person);

person.age = 30; // this is updating the age property from 25 to 30.
console.log(person);

delete person.city; // this is selectively deleting the city property.
console.log(person);

//loop through an object

for (const key in person) {
  console.log("key =", key);
  console.log("value =", person[key]);
}
