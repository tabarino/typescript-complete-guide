const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done!');
  }, 1000);
});

promise.then(data => {
  data.split(' ');
});

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Ivan' }, { age: 30 });
console.log(mergedObj.name);
