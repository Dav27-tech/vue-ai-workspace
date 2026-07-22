<script setup lang="ts"></script>

<template>
  <header class="bg-slate-900 text-white shadow-lg">
    <div
      class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4 lg:py-5 flex flex-col lg:flex-row lg:flex-nowrap justify-between items-center gap-4 lg:gap-6 xl:gap-10"
    >
      <div class="flex items-center gap-3 shrink-0">
        <div
          class="w-11 h-11 xl:w-12 xl:h-12 rounded-xl bg-blue-600 flex items-center justify-center text-xl xl:text-2xl font-bold"
        >
          AI
        </div>
        <div>
          <h1
            class="text-2xl xl:text-3xl font-bold text-white whitespace-nowrap"
          >
            AI Workspace
          </h1>
          <p class="text-sm text-slate-400 whitespace-nowrap">
            Productivity Dashboard
          </p>
        </div>
      </div>
      <nav class="hidden lg:block shrink-0">
        <ul
          class="flex gap-6 xl:gap-8 text-slate-300 font-medium whitespace-nowrap"
        >
          <li>
            <a href="#" class="hover:text-white transition"> Dashboard </a>
          </li>
          <li>
            <a href="#" class="hover:text-white transition"> AI Tools </a>
          </li>
          <li>
            <a href="#" class="hover:text-white transition"> Conversations </a>
          </li>
          <li>
            <a href="#" class="hover:text-white transition"> Settings </a>
          </li>
        </ul>
      </nav>
      <div class="flex items-center gap-3 xl:gap-4 w-full lg:w-auto">
        <input
          type="text"
          placeholder="Search AI tools..."
          class="bg-slate-800 text-white placeholder-slate-400 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-56 xl:w-72 2xl:w-80 transition-[width]"
        />
        <button
          class="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition shrink-0"
        >
          🔔
        </button>
        <div
          class="flex items-center gap-3 bg-slate-800 rounded-lg px-3 xl:px-4 py-2 shrink-0"
        >
          <div
            class="w-9 h-9 xl:w-10 xl:h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shrink-0"
          >
            👤
          </div>
          <div class="hidden sm:block">
            <p class="text-white font-semibold whitespace-nowrap">
              David AMANI
            </p>
            <p class="text-xs text-slate-400 whitespace-nowrap">
              Software Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
