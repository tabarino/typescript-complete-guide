function add(n1: number, n2: number, print: boolean, phrase: string) {
  const result = n1 + n2;
  if (print) {
    console.log(phrase, result);
  }

  return result;
}

const number1 = '5';
const number2 = '2.8';
const printResult = true;
const resultPhrase = 'Result is: ';

// + in this case converts the variables on numbers
add(+number1, +number2, printResult, resultPhrase);
