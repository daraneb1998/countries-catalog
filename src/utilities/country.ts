import type { CurrencyType } from "@/types";

export const getCountryCurrencies = (
  currencies: CurrencyType
): { name: string; symbol: string } => {
  return Object.keys(currencies || {}).map(
    (value: string) => currencies[value]
  )?.[0];
};
