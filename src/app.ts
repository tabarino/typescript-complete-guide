const button = document.querySelector('button');

const clickHandler = (message: string) => {
  console.log('Clicked! ' + message);
}

if (button) {
  button.addEventListener('click', clickHandler.bind(null, 'You are welcome!'));
}

const add = (n1: number, n2: number = 1) => n1 + n2;
console.log(add(2));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];
// activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
  name: 'Ivan',
  age: 39
};

const copiedPerson = { ...person };

console.log(copiedPerson);
