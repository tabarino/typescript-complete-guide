function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string) {
  // With "_" we tell typescript that we know there is an argument there, but we won't use it
  // return function(_: Function) {
  return function(constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();

    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  }
}

// @Logger('Logging Person')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Ivan';

  constructor() {
    console.log('Creating person object...');
  }
}

const person = new Person();
console.log(person);
