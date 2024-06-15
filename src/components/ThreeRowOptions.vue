<script setup lang="ts">
const props = defineProps<{
  title: string;
  actionTitle1: string;
  actionTitle2: string;
}>();
</script>

<template>
  <div class="flex gap-x-2 flex-wrap sticky">
    <button
      disabled
      class="border border-blue-500 text-gray-500 px-4 bg-slate-200 transition-colors"
    >
      {{ props.title }}
    </button>
    <button
      class="border border-blue-500 hover:text-white px-4 hover:bg-blue-500 transition-colors"
    >
      {{ props.actionTitle1 }}
    </button>
    <button
      class="border border-blue-500 hover:text-white px-4 hover:bg-blue-500 transition-colors"
    >
      {{ props.actionTitle2 }}
    </button>
  </div>
</template>
