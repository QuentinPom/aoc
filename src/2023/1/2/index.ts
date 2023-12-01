// https://adventofcode.com/2023/day/1

import { extractWithRegex } from "../../../utils/extractWithRegex";
import { readFileToArray } from "../../../utils/readFileToArray";

const filePath = "src/2023/1/2/input.txt";
const lines = readFileToArray(filePath);

const regexDigit = /\d/g;

const digitMap = {
  one: "o1e",
  two: "t2o",
  three: "t3e",
  four: "f4r",
  five: "f5e",
  six: "s6x",
  seven: "s7n",
  eight: "e8t",
  nine: "n9e",
};

const result = lines.map((line) => {
  for (const [key, value] of Object.entries(digitMap)) {
    line = line.replaceAll(key, value);
  }

  const value = extractWithRegex(line, regexDigit);
  const fullValue = `${value[0]}${value[value.length - 1]}`;
  return parseInt(fullValue);
});

console.log(result.reduce((acc, curr) => acc + curr, 0));
