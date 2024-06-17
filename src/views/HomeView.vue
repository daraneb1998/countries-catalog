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
    <div class="sticky top-[10%] flex justify-around">
      <SortOption />
      <SearchBox />
      <Pagination />
    </div>
    <CountryList />
  </main>
</template>
