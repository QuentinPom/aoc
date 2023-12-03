export function isValidNumber(char: string): boolean {
  return !isNaN(parseInt(char));
}
