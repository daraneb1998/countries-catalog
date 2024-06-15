import { computed, ref } from "vue";
import { defineStore } from "pinia";

import { useFetchCountries } from "@/services/useFetchCountries";
import type { CountryInfoType } from "@/types";
import { CONSTANTS, STORE_NAME } from "@/constants";
import { defaultState } from "./defaultState";

export const useSearchStore = defineStore(
  STORE_NAME.SEARCH,
  () => {
    const { error, isFetching, fetchCountryData } = useFetchCountries();
    const allCountries = ref<Array<CountryInfoType>>(
      defaultState.search.allCountries
    );
    const pageSize = ref<number>(defaultState.search.pageSize);
    const currentPageNumber = ref<number>(
      defaultState.search.currentPageNumber
    );

    if (allCountries.value.length <= CONSTANTS.EMPTY_ARRAY_SIZE) {
      fetchCountryData().then((countryItems) => {
        allCountries.value = countryItems;
      });
    }

    function getPaginatedCountries() {
      const startIndex = (currentPageNumber.value - 1) * pageSize.value;
      return allCountries.value.slice(startIndex, startIndex + pageSize.value);
    }

    const paginatedCountries = computed(() => getPaginatedCountries());

    return {
      pageSize,
      error,
      allCountries,
      isFetching,
      paginatedCountries,
    };
  },
  {
    persist: true,
  }
);
