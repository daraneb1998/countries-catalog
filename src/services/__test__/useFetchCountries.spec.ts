import { describe, it, expect, beforeEach, vi } from "vitest";

import { useFetchCountries } from "../useFetchCountries";
import { mockedCountry } from "@/assets/data";

describe("useFetchCountries", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("fetches data successfully", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue(mockedCountry),
    });
    const { isFetching, error, fetchCountryData } = useFetchCountries();

    const data = await fetchCountryData();
    expect(data).toEqual(mockedCountry);
    expect(isFetching.value).toBe(false);
    expect(error.value).toEqual("");
  });

  it("handles fetch failure", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
    });
    const { isFetching, error, fetchCountryData } = useFetchCountries();

    const data = await fetchCountryData();

    expect(data).toEqual([]);
    expect(isFetching.value).toBe(false);
    expect(error.value).toBe("Failed to fetch country data!");
  });

  it("handles network error", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));
    const { isFetching, error, fetchCountryData } = useFetchCountries();

    const data = await fetchCountryData();

    expect(data).toEqual([]);
    expect(isFetching.value).toBe(false);
    expect(error.value).toBe("Network error");
  });
});
