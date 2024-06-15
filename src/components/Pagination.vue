<script setup lang="ts">
import { useSearchStore } from "@/stores/search";
import { SortType } from "@/types";

const searchStore = useSearchStore();
const onGoToNextPage = () => {
  searchStore.onGoToNextPage();
};
const onGoToPreviousPage = () => {
  searchStore.onGoToPreviousPage();
};
</script>

<template>
  <div class="flex gap-x-2 flex-wrap sticky">
    <button
      disabled
      class="border border-blue-500 text-gray-500 px-4 bg-slate-200 transition-colors"
    >
      Page {{ searchStore.currentPageNumber }} ({{ searchStore.pageSize }}) of
      {{ searchStore.totalPages }}
    </button>
    <button
      :disabled="searchStore.currentPageNumber === 1"
      class="border border-blue-500 hover:text-white px-4 hover:bg-blue-500 transition-colors disabled:bg-slate-200 disabled:text-gray-500"
      :class="
        searchStore.sortType === SortType.ASCENDING
          ? 'bg-blue-500 text-white'
          : 'bg-transparent'
      "
      @click="onGoToPreviousPage"
    >
      PREVIOUS
    </button>
    <button
      :disabled="searchStore.totalPages === searchStore.currentPageNumber"
      class="border border-blue-500 hover:text-white px-4 hover:bg-blue-500 transition-colors disabled:bg-slate-200 disabled:text-gray-500"
      :class="
        searchStore.sortType === SortType.DESCENDING
          ? 'bg-blue-500 text-white'
          : 'bg-transparent'
      "
      @click="onGoToNextPage"
    >
      NEXT
    </button>
  </div>
</template>
