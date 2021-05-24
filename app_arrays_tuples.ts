// Type Inference doesn't work for Tuples
const person_tuple: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]
} = {
  name: 'Ivan',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

let favoriteActivities_array: string[];
favoriteActivities_array = ['Sports', 'Cooking'];

for (const hobby of person_tuple.hobbies) {
  console.log(hobby.toUpperCase());
}
