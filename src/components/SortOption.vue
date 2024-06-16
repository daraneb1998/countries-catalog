<script setup lang="ts">
import { useSearchStore } from "@/stores/search";
import { SortType } from "@/types";

import { useLoading } from "vue-loading-overlay";

const $loading = useLoading({
  isFullPage: true,
});

const searchStore = useSearchStore();
const onAscendingSort = () => {
  const loader = $loading.show();
  searchStore.updateSortType(SortType.ASCENDING);
  loader.hide();
};
const onDescendingSort = () => {
  const loader = $loading.show();
  searchStore.updateSortType(SortType.DESCENDING);
  loader.hide();
};
</script>

<template>
  <div class="flex gap-x-2 flex-wrap sticky">
    <button
      disabled
      class="border border-blue-500 text-gray-500 px-4 bg-slate-200 transition-colors"
    >
      SORT NAME
    </button>
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
