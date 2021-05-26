const button = document.querySelector('button');

const clickHandler = (message: string) => {
  console.log('Clicked! ' + message);
}

if (button) {
  button.addEventListener('click', clickHandler.bind(null, 'You are welcome!'));
}

const add = (n1: number, n2: number = 1) => n1 + n2;
console.log(add(2));
