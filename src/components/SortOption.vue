<script setup lang="ts">
import { useSearchStore } from "@/stores/search";
import { SortType } from "@/types";

const searchStore = useSearchStore();
const onAscendingSort = () => {
  searchStore.onSpinnerVisible();
  searchStore.updateSortType(SortType.ASCENDING);
  setTimeout(() => {
    searchStore.onSpinnerInvisible();
  }, 1000);
};
const onDescendingSort = () => {
  searchStore.onSpinnerVisible();
  searchStore.updateSortType(SortType.DESCENDING);
  setTimeout(() => {
    searchStore.onSpinnerInvisible();
  }, 1000);
};
</script>

<template>
  <div class="flex gap-x-2">
    <p class="text-base text-gray-500 hidden md:inline">SORT NAME</p>
    <button
      class="border border-blue-500 hover:text-white px-4 hover:bg-blue-500 transition-colors"
      :class="
        searchStore.sortType === SortType.ASCENDING
          ? 'bg-blue-500 text-white'
          : 'bg-transparent'
      "
      @click="onAscendingSort"
    >
      {{ SortType.ASCENDING }}
    </button>
    <button
      class="border border-blue-500 hover:text-white px-4 hover:bg-blue-500 transition-colors"
      :class="
        searchStore.sortType === SortType.DESCENDING
          ? 'bg-blue-500 text-white'
          : 'bg-transparent'
      "
      @click="onDescendingSort"
    >
      {{ SortType.DESCENDING }}
    </button>
  </div>
</template>
