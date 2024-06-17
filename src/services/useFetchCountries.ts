import { ref } from "vue";
import type { CountryInfoType } from "@/types";

export const useFetchCountries = () => {
  const error = ref<string>("");
  const isFetching = ref(false);

  const fetchCountryData = async () => {
    isFetching.value = true;
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error("Failed to fetch country data!");
      }
      const responseData = (await response.json()) as Array<CountryInfoType>;
      return responseData;
    } catch (err) {
      error.value = (err as Error).message;
      return [];
    } finally {
      isFetching.value = false;
    }
  };

  return {
    error,
    isFetching,
    fetchCountryData,
  };
};
