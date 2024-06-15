<script setup lang="ts">
import { useFetchCountries } from "@/services/useFetchCountries";
import CountryItem from "./CountryItem.vue";

const { error, countries, isFetching } = useFetchCountries();
</script>

<template>
  <div
    class="absolute top-[18vh] overflow-y-scroll w-screen h-[79vh] flex flex-row justify-center py-4 my-4"
  >
    <ul
      class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mx-8"
    >
      <li v-for="country in countries" :key="country.flags.png">
        <CountryItem :country="country" :key="country.flags.png" />
      </li>
    </ul>
  </div>
</template>
