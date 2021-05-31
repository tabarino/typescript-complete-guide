interface Greetable {
  readonly name: string;
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
