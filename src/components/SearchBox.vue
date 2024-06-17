<script setup lang="ts">
import { useDebounceFn } from "@vueuse/core";

import IconSearch from "@/components/icons/IconSearch.vue";
import { useSearchStore } from "@/stores/search";
import { CONSTANTS } from "@/constants";

const searchStore = useSearchStore();

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  searchStore.setSearchKeyword(target.value);
};
const handleDebouncedSearch = useDebounceFn((event: Event) => {
  searchStore.updateCurrentPageNumber(CONSTANTS.INITIAL_PAGE_NUMBER);
  handleChange(event);
}, CONSTANTS.DEBOUNCED_SEARCH_DURATION);
</script>

<template>
  <div class="sticky flex flex-row md:w-1/3 m-auto h-12 md:my-5 w-[calc(100vw-61px)]">
    <div
      class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
    >
      <IconSearch />
    </div>
    <input
      id="default-search"
      type="text"
      class="block p-4 pl-10 w-full rounded-sm border border-blue-500 focus:outline-none focus:border-blue-700 bg-sky-50"
      placeholder="COUNTRY NAME"
      :value="searchStore.searchKeyword"
      @input="handleDebouncedSearch"
    />
  </div>
</template>
