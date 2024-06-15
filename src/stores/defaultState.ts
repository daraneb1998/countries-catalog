import { CONSTANTS } from "@/constants";
import { SortType } from "@/types";

export const defaultState = {
  search: {
    error: null,
    allCountries: [],
    isFetching: false,
    searchKeyword: "",
    pageSize: CONSTANTS.DEFAULT_PAGE_SIZE,
    currentPageNumber: CONSTANTS.CURRENT_PAGE_NUMBER,
    sortType: SortType.ASCENDING,
  },
};
