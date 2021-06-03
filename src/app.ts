function Logger(logString: string) {
  console.log('Logger Factory');
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string) {
  console.log('Template Factory');
  // With "_" we tell typescript that we know there is an argument there, but we won't use it
  // return function(_: Function) {
  return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log('Rendering Template...');
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    }
  }
}

@Logger('Logging Person')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Ivan';

  constructor() {
    console.log('Creating person object...');
  }
}

const person = new Person();
console.log(person);



function Log(target: any, propertyName: string) {
  console.log('Property Decorator');
  console.log(target, propertyName);
}

function Log2(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('Accessor Decorator');
  console.log(target, name, descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('Method Decorator');
  console.log(target, name, descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter Decorator');
  console.log(target, name, position);
}

class Product {
  @Log
  title: string;

  private _price: number;

  public get price(): number {
    return this._price;
  }

  @Log2
  public set price(value: number) {
    if (value <= 0) {
      throw new Error('Invalid Price - It should be positive!');
    }
    this._price = value;
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}
