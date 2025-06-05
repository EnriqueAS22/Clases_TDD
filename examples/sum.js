export function sum(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Must be a number");
  }
  return a + b;
}
