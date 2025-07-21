
export function formatDateByHours(
  inputDate: string,
  format: "text" | "date" | "hh:mm",
  isUtc: boolean | undefined = false
) {
  if (!inputDate) return "~";

  let date = null;

  if (inputDate.endsWith("Z")) {
    date = new Date(`${inputDate}`);
  } else {
    date = new Date(`${inputDate}` + "Z");
  }

  const getMonth = isUtc ? date.getUTCMonth() : date.getMonth();
  const getDate = isUtc ? date.getUTCDate() : date.getDate();
  const getFullYear = isUtc ? date.getUTCFullYear() : date.getFullYear();
  const getHours = isUtc ? date.getUTCHours() : date.getHours();
  const getMinutes = isUtc ? date.getUTCMinutes() : date.getMinutes();

  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const month = months[getMonth];
  const day = getDate;
  const year = getFullYear;

  const hours24 = getHours;
  const hours = hours24.toString().padStart(2, "0");
  const minutes = getMinutes.toString().padStart(2, "0");

  const period = hours24 >= 12 ? "pm" : "am";
  const hours12 = hours24 % 12 || 12;

  if (format === "date") {
    return `${month} ${day}, ${year} ${hours}:${minutes}`;
  } else if (format === "text") {
    return `${month} ${day} ${"at"} ${hours12}:${minutes} ${period}`;
  } else if (format === "hh:mm") {
    return `${hours}:${minutes}`;
  }
}