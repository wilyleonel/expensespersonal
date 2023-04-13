export const idCompress = (value: string) => {
  const primeNumber: number[] = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
  const newArray: string[] = [];
  for (let i = 0; i < value?.length; i += 2) {
    newArray.push(value.slice(i, i + 2));
  }
  const parseArray = newArray.map(
    (_value, index) => parseInt(_value, 16) + primeNumber[index]
  );
  const multiplyArray = parseArray.map((_value, index) =>
    index % 2 == 0 ? parseArray[index] * parseArray[index + 1] : 0
  );
  const total = multiplyArray.reduce((a, b) => a + b, 0).toString();
  if (total.length < 6) {
    return 0 + total;
  } else {
    return total;
  }
};
