<template>
  <footer class="w-full bg-black/40 text-white py-6 mt-10">
    <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <!-- Brand / Nama -->
      <div class="text-center md:text-left">
        <h2 class="text-lg font-semibold">Hellenoirism</h2>
        <p class="text-sm text-gray-300">© 2025 Ilham Rizqy Maulana. All rights reserved.</p>
      </div>

      <!-- Navigation links -->
      <nav class="flex gap-4 text-sm">
        <RouterLink to="/" class="hover:text-indigo-400 transition">Home</RouterLink>
        <RouterLink to="/about" class="hover:text-indigo-400 transition">About</RouterLink>
        <RouterLink to="/projects" class="hover:text-indigo-400 transition">Projects</RouterLink>
        <RouterLink to="/contact" class="hover:text-indigo-400 transition">Contact</RouterLink>
      </nav>

      <!-- Social Media -->
      <div class="flex gap-3">
        <a href="https://github.com/username" target="_blank" class="hover:text-indigo-400 transition">GitHub</a>
        <a href="https://linkedin.com/in/username" target="_blank" class="hover:text-indigo-400 transition">LinkedIn</a>
        <a href="mailto:youremail@example.com" class="hover:text-indigo-400 transition">Email</a>
      </div>
    </div>
  </footer>
</template>