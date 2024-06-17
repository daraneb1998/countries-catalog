import { computed, ref } from "vue";
import { defineStore } from "pinia";

import { SortType, type CountryInfoType } from "@/types";
import { CONSTANTS, STORE_NAME } from "@/constants";
import { defaultState } from "./defaultState";
import type { RefSymbol } from "@vue/reactivity";
import { useFetchCountries } from "@/services/useFetchCountries";

export const useSearchStore = defineStore(
  STORE_NAME.SEARCH,
  () => {
    const allCountries = ref<Array<CountryInfoType>>(
      defaultState.search.allCountries
    );
    const pageSize = ref<number>(defaultState.search.pageSize);
    const isSpinnerLoading = ref<boolean>(defaultState.search.isSpinnerLoading);
    const currentPageNumber = ref<number>(
      defaultState.search.currentPageNumber
    );
    const searchKeyword = ref<string>(defaultState.search.searchKeyword);
    const sortType = ref<SortType>(defaultState.search.sortType);
    const { error, isFetching, fetchCountryData } = useFetchCountries();

    function setSearchKeyword(keyword: string) {
      searchKeyword.value = keyword;
    }

    function getCachedCurrentCountries() {
      const countryCaches = new Map<string, CountryInfoType[]>();
      if (allCountries.value.length <= CONSTANTS.EMPTY_ARRAY_SIZE) {
        onSpinnerVisible();
        fetchCountryData().then((countryItems) => {
          allCountries.value = countryItems;
          onSpinnerInvisible();
        });
      }
      return (keyword: string) => {
        if (countryCaches.has(keyword.trim())) {
          return countryCaches.get(keyword.trim());
        }
        const startIndex = (currentPageNumber.value - 1) * pageSize.value;
        const countries = allCountries.value
          .filter((country: CountryInfoType) => {
            return country.name.official
              .toLowerCase()
              .includes(keyword.toLowerCase());
          })
          .slice(startIndex, startIndex + pageSize.value)
          .sort((a: CountryInfoType, b: CountryInfoType) => {
            switch (sortType.value) {
              case SortType.ASCENDING:
                return a.name.official.localeCompare(b.name.official);
              case SortType.DESCENDING:
                return b.name.official.localeCompare(a.name.official);
              default:
                return a.name.official.localeCompare(b.name.official);
            }
          });
        countryCaches.set(keyword, countries);
        return countries;
      };
    }

    function updateSortType(type: SortType) {
      sortType.value = type;
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

    function onSpinnerInvisible() {
      isSpinnerLoading.value = false;
    }

    function onSpinnerVisible() {
      isSpinnerLoading.value = true;
    }

    function updateCurrentPageNumber(curentPage: number) {
      currentPageNumber.value = curentPage;
    }

    const countries = computed(() =>
      getCachedCurrentCountries()(searchKeyword.value)
    );
    const totalPages = computed(() =>
      Math.ceil(allCountries.value.length / pageSize.value)
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
      isSpinnerLoading,
      updateSortType,
      setSearchKeyword,
      onGoToNextPage,
      onGoToPreviousPage,
      onSpinnerVisible,
      onSpinnerInvisible,
      updateCurrentPageNumber,
    };
  },
  {
    persist: true,
  }
);
