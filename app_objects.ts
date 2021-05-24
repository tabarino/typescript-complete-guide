// // We can disable this notation and let Typescript assign the types for us with Type Inference
// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: 'Ivan',
  age: 30
};

console.log(person.name);

// Using Type Assignment
// const product: {
//   id: string;
//   price: number;
//   tags: string[],
//   details: {
//     title: string;
//     description: string;
//   }
// } = {
// Using Type Inference
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
};

console.log(product.details.title);
