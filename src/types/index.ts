export interface CurrencyType {
  [key: string]: { name: string; symbol: string };
}

export interface CountryInfoType {
  name: {
    common: string;
    official: string;
    nativeName: Record<string, { common: string; official: string }>;
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Record<string, { name: string; symbol: string }>;
  idd: { root: string; suffixes: string[] };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Record<string, string>;
  translations: Record<string, { official: string; common: string }>;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Record<string, { f: string; m: string }>;
  flag: string;
  maps: { googleMaps: string; openStreetMaps: string };
  population: number;
  gini?: { [year: string]: number };
  fifa: string;
  car: { signs: string[]; side: string };
  timezones: string[];
  continents: string[];
  flags: { png: string; svg: string; alt: string };
  coatOfArms: { png: string; svg: string };
  startOfWeek: string;
  capitalInfo: { latlng: number[] };
  postalCode: { format: string; regex: string };
}

export interface UseSearchType {
  keyword?: string;
}
export enum SortType {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

export type CountryNativeName = Record<
  string,
  { common: string; official: string }
>;
