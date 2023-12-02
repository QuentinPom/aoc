// https://adventofcode.com/2023/day/2

import { extractWithRegex } from "../../../utils/extractWithRegex";
import { readFileToArray } from "../../../utils/readFileToArray";

const filePath = "src/2023/2/2/input.txt";
const lines = readFileToArray(filePath);

const regexDigit = /\d+/g;

var totalPower = 0;
lines.forEach((line) => {
  const colonIndex = line.indexOf(":");
  const data = line
    .substring(colonIndex + 1)
    .replace(/\s+/g, "")
    .split(";");

  var redPower = 0,
    greenPower = 0,
    bluePower = 0;

  data.forEach((item) => {
    item.split(",").forEach((item) => {
      const count = parseInt(extractWithRegex(item, regexDigit)[0]);
      if (item.includes("red") && count > redPower) redPower = count;
      if (item.includes("green") && count > greenPower) greenPower = count;
      if (item.includes("blue") && count > bluePower) bluePower = count;
    });
  });

  totalPower += redPower * greenPower * bluePower;
});

console.log("Total power", totalPower);
