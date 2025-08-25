<template>
  <header>
  <nav class="relative px-6 py-4 w-full flex items-center flex-wrap">
  <div class="flex-1">
  <h1 class="text-white font-bold text-2xl font-['Allan']"><em>Hellenoirism</em></h1>
  </div>
  <ul class="flex gap-6 box-border px-3 py-1 rounded-md text-white absolute left-1/2 transform -translate-x-1/2">
    <li><RouterLink to="/about">About</RouterLink></li>
    <li><RouterLink to="/projects">Projects</RouterLink></li>
    <li><RouterLink to="/contact">Contact</RouterLink></li>
  </ul>
  <div class="flex-1 text-white flex justify-end">
    <button type="button">This is button </button>
  </div>
</nav>

  </header>
</template>
