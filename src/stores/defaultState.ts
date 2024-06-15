import { CONSTANTS } from "@/constants";

export const defaultState = {
  search: {
    error: null,
    allCountries: [],
    isFetching: false,
    pageSize: CONSTANTS.DEFAULT_PAGE_SIZE,
    currentPageNumber: CONSTANTS.CURRENT_PAGE_NUMBER
  },
};