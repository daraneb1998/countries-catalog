import type { CountryInfoType } from "@/types";
import { ref } from "vue";

export const useFetchCountries = () => {
  const countries = ref<Array<CountryInfoType>>([]);
  const error = ref<string>("");
  const isFetching = ref(false);

  const fetchCountryData = async () => {
    isFetching.value = true;
    try {
      const response = await fetch(import.meta.env.VITE_COUNTRY_ENPOINT_ALL);
      if (!response.ok) {
        throw new Error("Failed to fetch country data!");
      }
      const responseData = (await response.json()) as Array<CountryInfoType>;
      countries.value = responseData;
    } catch (err) {
      error.value = (err as Error).message;
    } finally {
      isFetching.value = false;
    }
  };

  fetchCountryData();

  return {
    error,
    countries,
    isFetching,
  };
};
