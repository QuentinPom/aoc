import { isValidNumber } from "../../../utils/isValidNumber";
import { readFileToArray } from "../../../utils/readFileToArray";

const filePath = "src/2023/3/2/input.txt";
const lines = readFileToArray(filePath);
const schemaGrid = lines.map((line) => line.split(""));

const isNumberAdjacent = (i: number, j: number): boolean => {
  if (isValidNumber(schemaGrid[i - 1]?.[j - 1])) return true; // top left
  if (isValidNumber(schemaGrid[i - 1]?.[j])) return true; // top
  if (isValidNumber(schemaGrid[i - 1]?.[j + 1])) return true; // top right
  if (isValidNumber(schemaGrid[i]?.[j - 1])) return true; // left
  if (isValidNumber(schemaGrid[i]?.[j + 1])) return true; // right
  if (isValidNumber(schemaGrid[i + 1]?.[j - 1])) return true; // bottom left
  if (isValidNumber(schemaGrid[i + 1]?.[j])) return true; // bottom
  if (isValidNumber(schemaGrid[i + 1]?.[j + 1])) return true; // bottom right

  return false;
};

var validNumbers: number[] = [];

const getFullNumber = (i: number, j: number) => {
  var firstNumberPosition: number = null;
  for (let k = j; k >= 0; k--) {
    const number = schemaGrid[i][k];
    if (!isValidNumber(number)) break;
    firstNumberPosition = k;
  }

  if (firstNumberPosition === null) throw new Error("No number found");

  var fullStringNumber = "";

  for (let k = firstNumberPosition; k <= schemaGrid[i].length; k++) {
    const number = schemaGrid[i][k];
    if (!isValidNumber(number)) break;
    fullStringNumber += number;
  }

  return fullStringNumber;
};

const ratioCalculation = (i: number, j: number) => {
  const numbers = [];

  if (isValidNumber(schemaGrid[i - 1]?.[j]))
    numbers.push(getFullNumber(i - 1, j)); // top
  if (isValidNumber(schemaGrid[i]?.[j - 1]))
    numbers.push(getFullNumber(i, j - 1)); // left
  if (isValidNumber(schemaGrid[i]?.[j + 1]))
    numbers.push(getFullNumber(i, j + 1)); // right
  if (isValidNumber(schemaGrid[i + 1]?.[j]))
    numbers.push(getFullNumber(i + 1, j)); // bottom

  if (!isValidNumber(schemaGrid[i - 1]?.[j])) {
    if (isValidNumber(schemaGrid[i - 1]?.[j - 1]))
      numbers.push(getFullNumber(i - 1, j - 1)); // top left
    if (isValidNumber(schemaGrid[i - 1]?.[j + 1]))
      numbers.push(getFullNumber(i - 1, j + 1)); // top right
  }

  if (!isValidNumber(schemaGrid[i + 1]?.[j])) {
    if (isValidNumber(schemaGrid[i + 1]?.[j - 1]))
      numbers.push(getFullNumber(i + 1, j - 1)); // bottom left
    if (isValidNumber(schemaGrid[i + 1]?.[j + 1]))
      numbers.push(getFullNumber(i + 1, j + 1)); // bottom right
  }

  if (numbers.length > 1) {
    const ratio = numbers.reduce((a, b) => a * b, 1);
    validNumbers.push(ratio);
  }
};

for (let i = 0; i < schemaGrid.length; i++) {
  for (let j = 0; j < schemaGrid[i].length; j++) {
    if (schemaGrid[i][j] != "*") continue;

    if (isNumberAdjacent(i, j)) {
      ratioCalculation(i, j);
    }
  }
}

console.log(validNumbers.reduce((a, b) => a + b, 0));
