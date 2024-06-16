import { computed, reactive, ref } from "vue";
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
    const isLoading = ref<boolean>(defaultState.search.isLoading);
    const countryCaches = reactive(new Map<string, Array<CountryInfoType>>());

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

    function getCachedCurrentCountries() {
      const startIndex = (currentPageNumber.value - 1) * pageSize.value;
      return (keyword: string) => {
        if (countryCaches.has(keyword)) {
          return countryCaches.get(keyword);
        }
        const countryData = allCountries.value
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
          .filter((country: CountryInfoType) => {
            return country.name.official
              .toLowerCase()
              .includes(keyword.toLowerCase());
          })
          .slice(startIndex, startIndex + pageSize.value);
        countryCaches.set(keyword, countryData);
        return countryData;
      };
    }

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
      getCachedCurrentCountries()(searchKeyword.value)
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
