export const extractWithRegex = (
  inputString: string,
  regex: RegExp
): string[] => {
  const matches = inputString.match(regex);
  return matches ? matches : [];
};
