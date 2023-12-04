// https://adventofcode.com/2023/day/4

import { extractWithRegex } from "../../../utils/extractWithRegex";
import { readFileToArray } from "../../../utils/readFileToArray";

const filePath = "src/2023/4/1/input.txt";
const lines = readFileToArray(filePath);
const regexDigit = /\d+/g;

var result = 0;

lines.forEach((line) => {
  const colonIndex = line.indexOf(":");
  const data = line.substring(colonIndex + 1).split("|");
  const winners = extractWithRegex(data[0], regexDigit);
  const results = extractWithRegex(data[1], regexDigit);
  const success = results.filter((result) => winners.includes(result)).length;
  if (success == 0) return;

  if (success > 1) result += 2 ** (success - 1);
  else result += 1;
});

console.log("Result", result);
