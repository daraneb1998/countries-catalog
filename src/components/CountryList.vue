<script setup lang="ts">
import CountryItem from "./CountryItem.vue";
import { useSearchStore } from "@/stores/search";

const searchStore = useSearchStore();
</script>

<template>
  <div
    class="absolute top-[25vh] overflow-y-scroll w-screen h-[70vh] flex flex-row justify-center py-4 my-4"
  >
    <ul
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mx-8"
    >
      <li v-for="country in searchStore.countries" :key="country.flags.png">
        <CountryItem :country="country" :key="country.flags.png" />
      </li>
    </ul>
  </div>
</template>
