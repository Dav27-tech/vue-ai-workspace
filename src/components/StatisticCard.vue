<script setup lang="ts">
interface Props {
  title: string;
  value: number;
  color: string;
}

defineProps<Props>();
</script>

<template>
  <div class="rounded-xl shadow-lg p-6 text-white" :class="color">
    <h3 class="text-lg font-semibold">
      {{ title }}
    </h3>
    <p class="text-4xl font-bold mt-4">
      {{ value }}
    </p>
  </div>
</template>
