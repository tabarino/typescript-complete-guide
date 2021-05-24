const person2 = {
  name: 'Ivan',
  age: 30,
  hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Cooking'];

for (const hobby of person2.hobbies) {
  console.log(hobby.toUpperCase());
}
