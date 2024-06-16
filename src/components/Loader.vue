<script setup lang="ts">
import { useSearchStore } from "@/stores/search";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

const searchStore = useSearchStore();
</script>

<template>
  <div class="vl-parent">
    <Loading v-model="searchStore.isLoading" is-full-page="true" />
  </div>
</template>
