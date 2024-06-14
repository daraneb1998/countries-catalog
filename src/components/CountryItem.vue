<script setup lang="ts">
const props = defineProps<{
  person: {
    name: string;
    email: string;
    image: string;
  };
}>();
</script>

<template>
  <button class=" bg-red-500 hover:scale-105 transition-all rounded-s">
    <img class="size-100" :src="props.person.image" alt="" />
    <div>
      <p class="font-bold truncate">{{ props.person.name }}</p>
      <p class="text-sm text-gray-500">{{ props.person.email }}</p>
    </div>
  </button>
</template>
