<script setup lang="ts">
interface Props {
  name: string;
  company: string;
  category: string;
  status: string;
  color: string;
  buttonText: string;
}

defineProps<Props>();
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg p-6">
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-xl font-bold">
        {{ name }}
      </h3>
      <span class="w-3 h-3 rounded-full" :class="color"></span>
    </div>
    <p class="text-gray-600">
      {{ company }}
    </p>
    <p class="text-sm text-gray-500 mb-6">
      {{ category }}
    </p>
    <button class="w-full bg-blue-700 text-white py-2 rounded-lg transition">
      {{ buttonText }}
    </button>
  </div>
</template>
