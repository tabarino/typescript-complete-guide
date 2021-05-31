// type is more commom for Function Types
// However we can also use an interface in this case
// type AddFn = (n1: number, n2: number) => number;
interface AddFn {
  (n1: number, n2: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1+ n2;
}

interface Named {
  readonly name: string;
  // ? = optional operator
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  readonly name: string;
  lastName: string;
  age = 39;

  constructor(name: string, lastName?: string) {
    this.name = name;
    // ! = non-null assertion operator
    this.lastName = lastName!;
  }

  greet(phrase: string): void {
    if (this.lastName) {
      console.log(phrase + ' ' + this.name + ' ' + this.lastName);
      return;  
    }

    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;
user1 = new Person('Ivan', 'Tabarino');

user1.greet('Hi there, I am');
