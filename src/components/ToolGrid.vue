<script setup lang="ts">
import ToolCard from "./ToolCard.vue";
import { tools } from "../data/tools";
</script>

<template>
  <section class="max-w-7xl mx-auto px-8 mb-10">
    <h2 class="text-2xl font-bold mb-6">AI Assistants</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ToolCard
        v-for="tool in tools"
        :key="tool.id"
        :name="tool.name"
        :company="tool.company"
        :category="tool.category"
        :status="tool.status"
        :color="tool.color"
        :button-text="tool.buttonText"
      />
    </div>
  </section>
</template>
