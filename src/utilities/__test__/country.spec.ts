import { describe, it, expect } from "vitest";
import { getCountryCurrencies, getNativeCountryNames } from "../country";
import { mockedCountry } from "@/assets/data";

describe("getCountryCurrencies", () => {
  it("getCountryCurrencies when the country is Cambodia", () => {
    expect(getCountryCurrencies(mockedCountry.currencies)).toStrictEqual({
      name: "Cambodian riel",
      symbol: "៛",
    });
  });
  it("getCountryCurrencies when the country is unknown", () => {
    expect(getCountryCurrencies({})).toBeUndefined();
  });
  it("getCountryCurrencies when the country is Thailand", () => {
    const currency = {
      THB: { name: "Thai baht", symbol: "฿" },
    };
    expect(getCountryCurrencies(currency)).toStrictEqual({
      name: "Thai baht",
      symbol: "฿",
    });
  });
});

describe("getNativeCountryNames", () => {
  it("getNativeCountryNames when the country is Cambodia", () => {
    expect(getNativeCountryNames(mockedCountry.name.nativeName)).toStrictEqual(
      "ព្រះរាជាណាចក្រកម្ពុជា"
    );
  });
  it("getNativeCountryNames when the country is unknown", () => {
    expect(getNativeCountryNames(undefined)).toStrictEqual("N/A");
  });
  it("getNativeCountryNames when the country is Thailand", () => {
    const nativeName = {
      tha: { official: "ราชอาณาจักรไทย", common: "ประเทศไทย" },
    };
    expect(getNativeCountryNames(nativeName)).toStrictEqual("ราชอาณาจักรไทย");
  });
});
