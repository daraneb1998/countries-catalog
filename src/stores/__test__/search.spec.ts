import { describe, it, expect, beforeEach } from "vitest";

import { setActivePinia, createPinia } from "pinia";
import { useSearchStore } from "../search";
import { SortType } from "@/types";
import { CONSTANTS } from "@/constants";

describe("useSearchStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("Initialize States useSearchStore and functions", () => {
    const state = useSearchStore();
    // default search store
    expect(state.error).toBeFalsy();
    expect(state.isFetching).toBeFalsy();
    expect(state.sortType).toEqual(SortType.ASCENDING);
    expect(state.pageSize).toEqual(CONSTANTS.DEFAULT_PAGE_SIZE);
    expect(state.allCountries.length).toEqual(0);
    expect(state.currentPageNumber).toEqual(CONSTANTS.CURRENT_PAGE_NUMBER);
    expect(state.isSpinnerLoading).toBeFalsy();
    expect(state.searchKeyword).toBeFalsy();
    expect(state.countries?.length).not.length;
  });

  it("Test on States updated according to functions", () => {
    const state = useSearchStore();
    // default search store
    expect(state.sortType).toEqual(SortType.ASCENDING);
    state.updateSortType(SortType.DESCENDING);
    expect(state.sortType).toEqual(SortType.DESCENDING);

    expect(state.currentPageNumber).toEqual(CONSTANTS.CURRENT_PAGE_NUMBER);
    state.updateCurrentPageNumber(2);
    expect(state.currentPageNumber).toEqual(2);
    state.updateCurrentPageNumber(10);
    expect(state.currentPageNumber).toEqual(10);

    expect(state.searchKeyword).toBeFalsy();
    state.setSearchKeyword("Cambodia");
    expect(state.searchKeyword).not.toBeFalsy();
    expect(state.searchKeyword).toEqual("Cambodia");
  });
});
