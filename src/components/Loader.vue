<script setup lang="ts">
import { useSearchStore } from "@/stores/search";
import VueLoading from 'vue-loading-overlay';
import "vue-loading-overlay/dist/css/index.css";

const searchStore = useSearchStore();
</script>

<template>
  <div class="vl-parent">
    <VueLoading
      :visible="searchStore.isLoading"
      :color="'#4fc08d'"
      :size="'large'"
    ></VueLoading>
  </div>
</template>
