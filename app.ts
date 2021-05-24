type combinable = number | string;
type resultableType = 'as-number' | 'as-text';

function combine(input1: combinable, input2: combinable, resultType: resultableType) {
  let result;
  
  if (resultType === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedAges);

const combinedName = combine('Ivan', 'Rosana', 'as-text');
console.log(combinedName);
