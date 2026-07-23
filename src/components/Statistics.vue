<script setup lang="ts">
import StatisticCard from "./StatisticCard.vue";
</script>

<template>
  <section class="container mx-auto mb-10 px-4 sm:px-6 lg:px-8">
    <div class="rounded-2xl bg-slate-50 px-4 py-10 shadow-md sm:px-6 lg:px-8">
      <div class="mb-8 text-center">
        <p
          class="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700"
        >
          Overview
        </p>
        <h2 class="text-3xl font-bold tracking-wide text-slate-900 sm:text-4xl">
          Statistics
        </h2>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        <div
          class="transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <StatisticCard title="AI Tools" :value="12" color="bg-blue-600" />
        </div>
        <div
          class="transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <StatisticCard title="Favorites" :value="5" color="bg-green-600" />
        </div>
        <div
          class="transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <StatisticCard title="Prompts" :value="234" color="bg-purple-600" />
        </div>
      </div>
    </div>
  </section>
</template>
