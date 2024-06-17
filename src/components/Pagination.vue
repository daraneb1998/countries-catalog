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
  <div class="flex gap-x-2">
    <p class="text-gray-500 self-center text-base hidden md:inline">
      Page {{ searchStore.currentPageNumber }} ({{ searchStore.pageSize }}) of
      {{ searchStore.totalPages }}
    </p>
    <button
      :disabled="
        searchStore.currentPageNumber === 1 || searchStore.searchKeyword !== ''
      "
      class="border border-blue-500 hover:text-white px-4 hover:bg-blue-500 transition-colors disabled:bg-slate-200 disabled:text-gray-500 disabled:cursor-not-allowed"
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
      :disabled="
        searchStore.totalPages === searchStore.currentPageNumber ||
        searchStore.searchKeyword !== ''
      "
      class="border border-blue-500 hover:text-white px-4 hover:bg-blue-500 transition-colors disabled:bg-slate-200 disabled:text-gray-500 disabled:cursor-not-allowed"
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
