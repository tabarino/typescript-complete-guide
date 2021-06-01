const paragraph = document.getElementById('message-output');

// const userInputElement = <HTMLInputElement>document.getElementById('user-input');
const userInputElement = document.getElementById('user-input') as HTMLInputElement;
userInputElement.value = 'Hi there!';

// When using Index Types you can add only properties of the same type
// For example: in this interface we create an Index Type as String
// So, we can add other properties with this index type, but all of them need to be string
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  username: 'Must start with a capital character'
};
