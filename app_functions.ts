// You can set the return types, but in most of the cases Type Inference works well.
function add(n1: number, n2: number): number {
  const result = n1 + n2;
  return result;
}

function printResult(result: number): void {
  console.log('Result: ' + result);
}

printResult(add(5, 12));

// let combineValues: Function;
let combineValues: (n1: number, n2: number) => number;
combineValues = add;
console.log(combineValues(1, 2));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
