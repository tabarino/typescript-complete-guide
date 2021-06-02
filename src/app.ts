const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve('This is done!');
  }, 1000);
});

promise.then(data => {
  data.split(' ');
});

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Ivan' }, { age: 30 });
console.log(mergedObj.name);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = 'Got no elements.';
  if (element.length > 0) {
    description = `Got ${element.length} elements.`;
  }
  return [element, description];
}

console.log(countAndDescribe(['Sports', 'Cooking']));
