export function formatDate(inputDate: string, t: any) {
  if (!inputDate) {
    return "~";
  }

  let date = null;

  if (inputDate.endsWith("Z")) {
    date = new Date(`${inputDate}`);
  } else {
    date = new Date(`${inputDate}` + "Z");
  }

  const months = [
    t("jan"),
    t("feb"),
    t("mar"),
    t("apr"),
    t("may"),
    t("jun"),
    t("jul"),
    t("aug"),
    t("sep"),
    t("oct"),
    t("nov"),
    t("dec"),
  ];

  const month = months[date.getUTCMonth()];
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  return `${month} ${day}, ${year}`;
}