export const convertToCapitalize = (value: string) => {
  const stringToArray = value.split(" ");
  const indexToUpper = stringToArray.map((_string) => {
    return _string.charAt(0).toUpperCase() + _string.slice(1).toLowerCase();
  });
  return indexToUpper.join(" ");
};