import { isValidNumber } from "../../../utils/isValidNumber";
import { readFileToArray } from "../../../utils/readFileToArray";

const filePath = "src/2023/3/1/input.txt";
const lines = readFileToArray(filePath);

const schemaGrid = lines.map((line) => line.split(""));

const isSymbol = (value: string) =>
  !isValidNumber(value) && value !== "." && value;

const isSymbolAdjacent = (i: number, j: number): boolean => {
  if (isSymbol(schemaGrid[i - 1]?.[j - 1])) return true; // top left
  if (isSymbol(schemaGrid[i - 1]?.[j])) return true; // top
  if (isSymbol(schemaGrid[i - 1]?.[j + 1])) return true; // top right
  if (isSymbol(schemaGrid[i]?.[j - 1])) return true; // left
  if (isSymbol(schemaGrid[i]?.[j + 1])) return true; // right
  if (isSymbol(schemaGrid[i + 1]?.[j - 1])) return true; // bottom left
  if (isSymbol(schemaGrid[i + 1]?.[j])) return true; // bottom
  if (isSymbol(schemaGrid[i + 1]?.[j + 1])) return true; // bottom right

  return false;
};

var validNumbers: number[] = [];

const setFullNumberAndGetNewPosition = (i: number, j: number): number => {
  var firstNumberPosition: number = null;
  for (let k = j; k >= 0; k--) {
    const number = schemaGrid[i][k];
    if (!isValidNumber(number)) break;
    firstNumberPosition = k;
  }

  if (firstNumberPosition === null) throw new Error("No number found");

  var fullStringNumber = "";

  var lastNumberPosition: number = null;

  for (let k = firstNumberPosition; k <= schemaGrid[i].length; k++) {
    const number = schemaGrid[i][k];
    if (!isValidNumber(number)) break;
    fullStringNumber += number;
    lastNumberPosition = k;
  }

  validNumbers.push(parseInt(fullStringNumber));

  return lastNumberPosition;
};

for (let i = 0; i < schemaGrid.length; i++) {
  for (let j = 0; j < schemaGrid[i].length; j++) {
    if (isValidNumber(schemaGrid[i][j]) && isSymbolAdjacent(i, j)) {
      j = setFullNumberAndGetNewPosition(i, j);
    }
  }
}

console.log(validNumbers.reduce((a, b) => a + b, 0));
