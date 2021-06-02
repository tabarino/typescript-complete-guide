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

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return `Value: ${obj[key]}`;
}

console.log(extractAndConvert({ name: 'Ivan' }, 'name'));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  getItems() {
    return [...this.data];
  }

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Ivan');
textStorage.addItem('Rosana');
textStorage.addItem('Matheus');
textStorage.removeItem('Matheus');
console.log(textStorage.getItems());
