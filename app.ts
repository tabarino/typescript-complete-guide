// Type Inference doesn't work for Tuples
const person2: {
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

let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Cooking'];

for (const hobby of person2.hobbies) {
  console.log(hobby.toUpperCase());
}
