function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

@Logger('Logging Person')
class Person {
  name = 'Ivan';

  constructor() {
    console.log('Creating person object...');
  }
}

const person = new Person();
console.log(person);
