<script setup lang="ts">
import Title from "@/components/Title.vue";
import SortOption from "@/components/SortOption.vue";
import Loader from "@/components/Loader.vue";
import Pagination from "@/components/Pagination.vue";
import SearchBox from "@/components/SearchBox.vue";
import CountryList from "@/components/CountryList.vue";
</script>

<template>
  <main class="h-screen w-screen absolute bg-sky-50">
    <Loader />
    <Title />
    <div
      class="absolute flex flex-col justify-between top-14 m-auto w-full gap-2"
    >
      <SearchBox />
      <div class="flex flex-col justify-between mx-8 md:flex-row gap-2">
        <SortOption />
        <Pagination />
      </div>
    </div>
    <CountryList />
  </main>
</template>
