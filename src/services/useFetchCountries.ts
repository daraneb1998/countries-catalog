import { ref } from "vue";
import type { CountryInfoType } from "@/types";

export const useFetchCountries = () => {
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
