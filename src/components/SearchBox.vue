<script setup lang="ts">
import IconSearch from "@/components/icons/IconSearch.vue";
import { useSearchStore } from "@/stores/search";

const searchStore = useSearchStore();

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  searchStore.setSearchKeyword(target.value);
};
</script>

<template>
  <div class="w-1/2 absolute flex flex-row translate-x-1/2 top-[10%]">
    <div
      class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
      data-v-65e472f8=""
    >
      <IconSearch />
    </div>
    <input
      id="default-search"
      type="text"
      class="block p-4 pl-10 w-full rounded-sm border focus:border-none"
      placeholder="Country name"
      :value="searchStore.searchKeyword"
      @input="handleChange"
    />
  </div>
</template>
