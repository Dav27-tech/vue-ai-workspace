<script setup lang="ts">
import ConversationList from "./components/ConversationList.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Statistics from "./components/Statistics.vue";
import ToolGrid from "./components/ToolGrid.vue";
import Welcome from "./components/Welcome.vue";
</script>

<template>
  <Header />
  <main>
    <Welcome />
    <Statistics /><ToolGrid />
    <ConversationList />
  </main>
  <Footer />
</template>
