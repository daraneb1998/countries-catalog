import type { CountryNativeName, CurrencyType } from "@/types";

export const getCountryCurrencies = (
  currencies: CurrencyType
): { name: string; symbol: string } => {
  return Object.keys(currencies || {}).map(
    (value: string) => currencies[value]
  )?.[0];
};

export const getNativeCountryNames = (nativeName: CountryNativeName| undefined) => {
  if (!nativeName) {
    return "N/A";
  }
  return Object.keys(nativeName || {})
    .map((value: string) => nativeName[value].official)
    .join(", ");
};
