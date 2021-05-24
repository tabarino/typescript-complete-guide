enum Role {
  ADMIN = 10,
  READ_ONLY = 20,
  AUTHOR = 30
}

const person = {
  name: 'Ivan',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.AUTHOR
};

// There in no benefits using "any" type
// Try to avoid it, because you remove all the advantages of typescript
let favoriteActivities: any[];
favoriteActivities = ['Sports', 'Cooking'];

if (person.role === Role.AUTHOR) {
  console.log('Author');
}
