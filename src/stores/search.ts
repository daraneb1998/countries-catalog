import { ref } from "vue";
import { defineStore } from "pinia";

import { useFetchCountries } from "@/services/useFetchCountries";
import type { CountryInfoType } from "@/types";
import { CONSTANTS } from "@/constants";

export const useSearchStore = defineStore(
  "search",
  () => {
    const { error, isFetching, fetchCountryData } = useFetchCountries();
    const countries = ref<Array<CountryInfoType>>([]);
    if (countries.value.length <= CONSTANTS.EMPTY_ARRAY_SIZE) {
      fetchCountryData().then((countryItems) => {
        countries.value = countryItems;
      });
    }

    return {
      error,
      countries,
      isFetching,
    };
  },
  {
    persist: true,
  }
);
