import { computed, ref } from "vue";
import { defineStore } from "pinia";

import { useFetchCountries } from "@/services/useFetchCountries";
import { SortType, type CountryInfoType } from "@/types";
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
    const sortType = ref<SortType>(defaultState.search.sortType);

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
        .sort((a: CountryInfoType, b: CountryInfoType) => {
          switch (sortType.value) {
            case SortType.ASCENDING:
              return a.name.official.localeCompare(b.name.official);
            case SortType.DESCENDING:
              return b.name.official.localeCompare(a.name.official);
            default:
              return a.name.official.localeCompare(b.name.official);
          }
        })
        .slice(startIndex, startIndex + pageSize.value);
    }

    function updateSortType(type: SortType) {
      sortType.value = type;
    }

    const countries = computed(() => getCurrentCountries());
    const totalPages = computed(() =>
      (allCountries.value.length / pageSize.value).toFixed()
    );
    return {
      error,
      sortType,
      pageSize,
      totalPages,
      allCountries,
      isFetching,
      currentPageNumber,
      countries,
      searchKeyword,
      updateSortType,
      setSearchKeyword,
    };
  },
  {
    persist: true,
  }
);
