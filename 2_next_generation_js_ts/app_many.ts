const button = document.querySelector('button');

const clickHandler = (message: string) => {
  console.log('Clicked! ' + message);
}

if (button) {
  button.addEventListener('click', clickHandler.bind(null, 'You are welcome!'));
}

// const add = (n1: number, n2: number = 1) => n1 + n2;
// console.log(add(2));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = [...hobbies, 'Hiking', 'Fishing'];
// activeHobbies.push(...hobbies);

console.log(activeHobbies);

const [hobbie1, hobbie2] = hobbies;
console.log(hobbie1);
console.log(hobbie2);

const [activeHobbie1, activeHobbie2, ...remainingHobbies] = activeHobbies;
console.log(remainingHobbies);

const person = {
  firstName: 'Ivan',
  age: 39
};

const copiedPerson = { ...person };

console.log(copiedPerson);

const { age, firstName: userName } = person;
console.log(userName);
console.log(age);

// const add = (...numbers: [number, number, number]) => {
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const result = add(5, 10, 2, 3.7);

console.log(result);
