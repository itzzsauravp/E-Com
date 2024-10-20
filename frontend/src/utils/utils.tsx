export function generateNumbersWithDifference(diff: number) {
  if (diff < 0 || diff > 20) {
    throw new Error("Difference must be between 0 and 20.");
  }
  const min = 0;
  const max = 20;
  const num1 = Math.floor(Math.random() * (max - min - diff + 1)) + min;
  const num2 = num1 + diff;

  if (num2 > max) {
    return generateNumbersWithDifference(diff);
  }

  return [num1, num2];
}
