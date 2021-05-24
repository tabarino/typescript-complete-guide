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

if (person.role === Role.AUTHOR) {
  console.log('Author');
}
