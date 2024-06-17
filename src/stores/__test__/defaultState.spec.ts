import { describe, it, expect } from "vitest";
import { defaultState } from "../defaultState";
import { CONSTANTS } from "@/constants";
import { SortType } from "@/types";

describe("defaultState", () => {
  it("defaultState init as expected", () => {
    expect(defaultState).toStrictEqual({
      search: {
        error: null,
        allCountries: [],
        isFetching: false,
        searchKeyword: "",
        pageSize: CONSTANTS.DEFAULT_PAGE_SIZE,
        currentPageNumber: CONSTANTS.CURRENT_PAGE_NUMBER,
        sortType: SortType.ASCENDING,
        isSpinnerLoading: false,
      },
    });
  });
});
