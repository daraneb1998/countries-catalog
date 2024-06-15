import { computed, ref } from "vue";
import { defineStore } from "pinia";

import { useFetchCountries } from "@/services/useFetchCountries";
import type { CountryInfoType } from "@/types";
import { CONSTANTS, STORE_NAME } from "@/constants";
import { defaultState } from "./defaultState";

export const useSearchStore = defineStore(
  STORE_NAME.SEARCH,
  () => {
    const allCountries = ref<Array<CountryInfoType>>(
      defaultState.search.allCountries
    );
    const pageSize = ref<number>(defaultState.search.pageSize);
    const currentPageNumber = ref<number>(
      defaultState.search.currentPageNumber
    );
    const searchKeyword = ref<string>(defaultState.search.searchKeyword);

    const { error, isFetching, fetchCountryData } = useFetchCountries();

    if (allCountries.value.length <= CONSTANTS.EMPTY_ARRAY_SIZE) {
      fetchCountryData().then((countryItems) => {
        allCountries.value = countryItems;
      });
    }

    function setSearchKeyword(keyword: string) {
      searchKeyword.value = keyword;
    }

    function getCurrentCountries() {
      const startIndex = (currentPageNumber.value - 1) * pageSize.value;
      return allCountries.value
        .filter((country: CountryInfoType) => {
          return country.name.official
            .toLowerCase()
            .includes((searchKeyword.value || "").toLowerCase());
        })
        .slice(startIndex, startIndex + pageSize.value);
    }

    const countries = computed(() => getCurrentCountries());

    return {
      pageSize,
      error,
      allCountries,
      isFetching,
      currentPageNumber,
      countries,
      searchKeyword,
      setSearchKeyword,
    };
  },
  {
    persist: true,
  }
);
