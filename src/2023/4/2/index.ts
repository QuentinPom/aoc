// https://adventofcode.com/2023/day/4

import { extractWithRegex } from "../../../utils/extractWithRegex";
import { readFileToArray } from "../../../utils/readFileToArray";

const filePath = "src/2023/4/2/input.txt";
const lines = readFileToArray(filePath);
const regexDigit = /\d+/g;

const cardCopy = new Array(lines.length).fill(1);

lines.forEach((line, index) => {
  const colonIndex = line.indexOf(":");
  const data = line.substring(colonIndex + 1).split("|");
  const winners = extractWithRegex(data[0], regexDigit);
  const results = extractWithRegex(data[1], regexDigit);
  const success = results.filter((result) => winners.includes(result)).length;

  for (let i = 1; i < success + 1; i++) {
    cardCopy[index + i] += 1 * cardCopy[index];
  }
});

console.log(
  "Result",
  cardCopy.reduce((a, b) => a + b, 0)
);
