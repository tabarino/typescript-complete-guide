let userInput: unknown;
let username: string;

userInput = 'Ivan';
if (typeof userInput === 'string') {
  username = userInput;
}

function generateError(message: string, code: number): never {
  throw {message: message, errorCode: code};
}

generateError('An error ocurred', 500);
