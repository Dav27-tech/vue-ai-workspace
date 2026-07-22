<script setup lang="ts">
import { conversations } from "../data/conversations";
</script>

<template>
  <section class="max-w-7xl mx-auto px-8 mb-10">
    <h2 class="text-2xl font-bold mb-6">Recent Conversations</h2>
    <div class="bg-white rounded-xl shadow-lg divide-y">
      <div
        v-for="conversation in conversations"
        :key="conversation.id"
        class="p-5 flex justify-between"
      >
        <span>
          {{ conversation.title }}
        </span>
        <span class="text-gray-500">
          {{ conversation.date }}
        </span>
      </div>
    </div>
  </section>
</template>
