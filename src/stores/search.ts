import { computed, ref } from "vue";
import { defineStore } from "pinia";

import { useFetchCountries } from "@/services/useFetchCountries";
import { SortType, type CountryInfoType } from "@/types";
import { CONSTANTS, STORE_NAME } from "@/constants";
import { defaultState } from "./defaultState";
import { useMemoize } from "@vueuse/core";

export const useSearchStore = defineStore(
  STORE_NAME.SEARCH,
  () => {
    const allCountries = ref<Array<CountryInfoType>>(
      defaultState.search.allCountries
    );
    const pageSize = ref<number>(defaultState.search.pageSize);
    const isLoading = ref<boolean>(defaultState.search.isLoading);

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

    const getCachedCurrentCountries = useMemoize(
      (sort: SortType, keyword: string) => {
        const startIndex = (currentPageNumber.value - 1) * pageSize.value;
        return allCountries.value
          .sort((a: CountryInfoType, b: CountryInfoType) => {
            switch (sort) {
              case SortType.ASCENDING:
                return a.name.official.localeCompare(b.name.official);
              case SortType.DESCENDING:
                return b.name.official.localeCompare(a.name.official);
              default:
                return a.name.official.localeCompare(b.name.official);
            }
          })
          .filter((country: CountryInfoType) => {
            return country.name.official
              .toLowerCase()
              .includes(keyword.toLowerCase());
          })
          .slice(startIndex, startIndex + pageSize.value);
      }
    );

    function updateSortType(type: SortType) {
      sortType.value = type;
      isLoading.value = false;
    }

    function onGoToNextPage() {
      if (currentPageNumber.value <= totalPages.value) {
        currentPageNumber.value++;
      }
    }

    function onGoToPreviousPage() {
      if (currentPageNumber.value !== CONSTANTS.INITIAL_PAGE_NUMBER) {
        currentPageNumber.value--;
      }
    }

    function onLoading() {
      isLoading.value = true;
    }

    const countries = computed(() =>
      getCachedCurrentCountries(sortType.value, searchKeyword.value)
    );
    const totalPages = computed(() =>
      Math.ceil(allCountries.value.length / pageSize.value)
    );

    return {
      error,
      sortType,
      pageSize,
      isLoading,
      totalPages,
      allCountries,
      isFetching,
      currentPageNumber,
      countries,
      searchKeyword,
      onLoading,
      updateSortType,
      setSearchKeyword,
      onGoToNextPage,
      onGoToPreviousPage,
    };
  },
  {
    persist: true,
  }
);
