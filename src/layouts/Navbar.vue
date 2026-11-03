<script setup lang="ts">
/**
 * ============================================================================
 * [RESPONSIVE NAVIGATION SYSTEM - ATM Clean Modern GoMeal Style]
 * Mengadopsi prinsip desain dari referensi:
 * - Brand logo tegas dengan aksen dot warna Amber (`GoMeal.` -> `Alhaiza.`)
 * - Rounded-full CTA button dengan aksen amber glow
 * - Navigasi responsive mobile drawer dengan transisi mulus
 * ============================================================================
 */
import { ref } from 'vue'

const isOpen = ref<boolean>(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-amber-100/70 transition-all duration-300"
  >
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
      <!-- Brand Logo (ATM Style: GoMeal.) -->
      <a href="#" class="text-slate-900 font-black tracking-tight text-2xl select-none flex items-center">
        <span>Alhaiza</span>
        <span class="text-amber-500 font-extrabold text-3xl leading-none">.</span>
      </a>

      <!-- Desktop Navigation Menu (md: 768px+) -->
      <div class="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
        <a href="#about" class="hover:text-amber-600 transition-colors">About</a>
        <a href="#projects" class="hover:text-amber-600 transition-colors">Projects</a>
        <a href="#skills" class="hover:text-amber-600 transition-colors">Tech Stack</a>
        <a href="#experience" class="hover:text-amber-600 transition-colors">Experience</a>
        <a
          href="#contact"
          class="px-5 py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold rounded-2xl transition shadow-md shadow-amber-400/25 active:scale-95 cursor-pointer"
        >
          Contact Me
        </a>
      </div>

      <!-- Mobile Hamburger Button (< 768px) -->
      <button
        type="button"
        @click="toggleMenu"
        class="md:hidden p-2.5 rounded-2xl text-slate-700 bg-amber-50 hover:bg-amber-100 focus:outline-none transition"
        :aria-expanded="isOpen"
        aria-label="Toggle navigation menu"
      >
        <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Navigation Drawer -->
    <div
      v-if="isOpen"
      class="md:hidden border-t border-amber-100 bg-white/98 backdrop-blur-xl px-4 py-4 space-y-2 shadow-2xl transition-all"
    >
      <a href="#about" @click="closeMenu" class="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-amber-600 hover:bg-amber-50/60 transition">About</a>
      <a href="#projects" @click="closeMenu" class="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-amber-600 hover:bg-amber-50/60 transition">Projects</a>
      <a href="#skills" @click="closeMenu" class="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-amber-600 hover:bg-amber-50/60 transition">Tech Stack</a>
      <a href="#experience" @click="closeMenu" class="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-amber-600 hover:bg-amber-50/60 transition">Experience</a>
      <a href="#contact" @click="closeMenu" class="block text-center mt-3 px-4 py-2.5 bg-amber-400 text-slate-900 font-bold rounded-xl shadow-md shadow-amber-400/20">Contact Me</a>
    </div>
  </header>
</template>
