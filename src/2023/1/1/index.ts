// https://adventofcode.com/2023/day/1

import { extractWithRegex } from "../../../utils/extractWithRegex";
import { readFileToArray } from "../../../utils/readFileToArray";

const filePath = "src/2023/1/1/input.txt";
const lines = readFileToArray(filePath);

const regexDigit = /\d/g;

const result = lines.map((line) => {
  const value = extractWithRegex(line, regexDigit);
  const fullValue = value[0] + value[value.length - 1];
  return parseInt(fullValue);
});

console.log(result.reduce((acc, curr) => acc + curr, 0));
