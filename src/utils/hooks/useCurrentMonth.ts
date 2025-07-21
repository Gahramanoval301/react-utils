export function useCurrentMonth() {
  // if you have translation system
  // const locale = useLocale();
  // return new Date().toLocaleString(locale, { month: "long" });

  return new Date().toLocaleString("en", { month: "long" });
}
