// You can set the return types, but in most of the cases Type Inference works well.
function add(n1: number, n2: number): number {
  const result = n1 + n2;
  return result;
}

function printResult(result: number): void {
  console.log('Result: ' + result);
}

printResult(add(5, 12));
