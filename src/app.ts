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
  readonly name: string
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  readonly name: string;
  age = 39;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name);
  }

}

let user1: Greetable;
user1 = new Person('Ivan');

user1.greet('Hi there, I am');
