<script setup lang="ts">
import Title from "@/components/Title.vue";
import SearchBox from "@/components/SearchBox.vue";
import CountryList from "@/components/CountryList.vue";
</script>

<template>
  <main class="h-screen w-screen absolute">
    <Title />
    <SearchBox />
    <CountryList />
  </main>
</template>
