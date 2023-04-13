let ZONE_LOCALE = "es-PE";
const CONFIG_DATE_TIME_FORMAT: Intl.DateTimeFormatOptions = {};

const formatDate = (
  date: Date,
  config?: Intl.DateTimeFormatOptions
): string => {
  const formato = new Intl.DateTimeFormat(ZONE_LOCALE, {
    ...config,
    ...CONFIG_DATE_TIME_FORMAT,
  }).format;
  return formato(date);
};

export const transforData = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const tranforMonth = month < 10 ? `0${month}` : month;
  const tranforday = day < 10 ? `0${day}` : day;
  const fullDate = `${year}-${tranforMonth}-${tranforday}T00:00:00.000Z`;
  return fullDate; //retorna : 2022-10-25T05:00:00.000Z
};

export const parseDateBirth = (value: string, sing: string) => {
  const toArray = value.split(sing);
  const reverseValue = toArray.reverse().join();
  const parseValue = reverseValue.replace(/,/g, "/");
  return parseValue; //retorna: yyyy/mm/dd
};

export const getYearPerson = (birthDate: string) => {
  const timeNow = new Date();
  const parseBirthDate = new Date(birthDate);
  const totalYears = timeNow.getFullYear() - parseBirthDate.getFullYear();
  if (timeNow.getMonth() < parseBirthDate.getMonth()) {
    return (totalYears - 1).toString(); //retorna: years:string menores al mes
  }
  return totalYears.toString(); //retorna: years:string mayores al mes
};

export const parseDateBirthClasic = (
  value: string,
  sing: string,
  replace: string
) => {
  const toArray = value.split(sing);
  const reverseValue = toArray.reverse().join();
  const parseValue = reverseValue.replace(/,/g, replace);
  return parseValue; //retorna: yyyy/mm/dd
};

export const parseDate = (value: string, sing: string, replace: string) => {
  const splitDate = value.split(sing).join();
  return splitDate.replace(/,/g, replace);
};

export const parseUTCTime = (UTC: number, date: string, time: string) => {
  let next = 0;
  let formatData = time.split(":");
  let dateParse = parseInt(formatData[0]) + UTC;
  let valueparse = dateParse < 10 ? `0${dateParse}` : `${dateParse}`;
  if (dateParse >= 24) {
    let diference = dateParse - 24;
    next = 1;
    valueparse = diference < 10 ? `0${diference}` : `${diference}`;
  }
  let dateTime = `${valueparse}:${formatData[1]}`;
  let newDay = new Date(new Date(date));
  let parseDateUTC = new Date(newDay.setDate(newDay.getDate() + next));
  let newDateParse = formatDate(parseDateUTC, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  let parseValue = parseDateBirthClasic(newDateParse, "/", "-");
  return `${parseValue}T${dateTime}`;
};

export default formatDate;
