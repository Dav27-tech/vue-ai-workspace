<script setup lang="ts">
import StatisticCard from "./StatisticCard.vue";
</script>

<template>
  <section class="max-w-7xl mx-auto px-8 mb-10">
    <h2 class="text-2xl font-bold mb-6">Statistics</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatisticCard title="AI Tools" :value="12" color="bg-blue-600" />
      <StatisticCard title="Favorites" :value="5" color="bg-green-600" />
      <StatisticCard title="Prompts" :value="234" color="bg-purple-600" />
    </div>
  </section>
</template>
