// https://adventofcode.com/2023/day/2

import { extractWithRegex } from "../../../utils/extractWithRegex";
import { readFileToArray } from "../../../utils/readFileToArray";

const filePath = "src/2023/2/1/input.txt";
const lines = readFileToArray(filePath);

const regexDigit = /\d+/g;
const maxRed = 12,
  maxGreen = 13,
  maxBlue = 14;

var totalId = 0;
lines.forEach((line, index) => {
  const colonIndex = line.indexOf(":");
  const data = line
    .substring(colonIndex + 1)
    .replace(/\s+/g, "")
    .split(";");

  const rollsPossible =
    data
      .map((item) => {
        const result = item
          .split(",")
          .map((item) => {
            const count = parseInt(extractWithRegex(item, regexDigit)[0]);
            if (item.includes("red") && count > maxRed) return false;
            if (item.includes("green") && count > maxGreen) return false;
            if (item.includes("blue") && count > maxBlue) return false;
          })
          .filter((item) => item === false).length;
        return result == 0;
      })
      .filter((item) => item === false).length == 0;

  if (rollsPossible) totalId += index + 1;
});

console.log("totalId", totalId);
