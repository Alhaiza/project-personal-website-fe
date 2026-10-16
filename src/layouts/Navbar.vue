<script setup lang="ts">
/**
 * ============================================================================
 * [RESPONSIVE NAVIGATION SYSTEM & STATE MANAGEMENT]
 * Mengelola state interaktif menu navigasi untuk tampilan multi-device:
 * 1. 'isOpen' (ref boolean): Mengontrol buka-tutup mobile menu drawer.
 * 2. 'toggleMenu': Membalikkan status saat tombol hamburger ditekan.
 * 3. 'closeMenu': Menutup drawer secara otomatis ketika user memilih section tujuan,
 *    mencegah drawer menghalangi viewport pengguna saat berpindah link.
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
  <!--
    Sticky Header: Clean White Minimalist
    - bg-white/90 + backdrop-blur-md: Efek kaca bersih
    - border-b border-slate-200/80: Garis batas halus
  -->
  <header
    class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300"
  >
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <!-- Brand Logo -->
      <a href="#" class="text-slate-900 font-bold tracking-tight text-xl select-none flex items-center gap-1.5">
        <span class="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block"></span>
        <span>Alhaiza</span>
      </a>

      <!-- Desktop Navigation Menu (md: 768px+) -->
      <div class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#about" class="hover:text-blue-600 transition-colors">About</a>
        <a href="#experience" class="hover:text-blue-600 transition-colors">Experience</a>
        <a href="#projects" class="hover:text-blue-600 transition-colors">Projects</a>
        <a href="#skills" class="hover:text-blue-600 transition-colors">Skills</a>
        <a
          href="#contact"
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition shadow-sm shadow-blue-500/20 active:scale-95"
        >
          Contact Me
        </a>
      </div>

      <!-- Mobile Hamburger Button (< 768px) -->
      <button
        type="button"
        @click="toggleMenu"
        class="md:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition"
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
      class="md:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-xl px-4 py-4 space-y-2 shadow-xl transition-all"
    >
      <a href="#about" @click="closeMenu" class="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition">About</a>
      <a href="#experience" @click="closeMenu" class="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition">Experience</a>
      <a href="#projects" @click="closeMenu" class="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition">Projects</a>
      <a href="#skills" @click="closeMenu" class="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition">Skills</a>
      <a href="#contact" @click="closeMenu" class="block px-3 py-2.5 rounded-lg text-sm font-semibold text-blue-600 hover:bg-blue-50 transition">Contact Me</a>
    </div>
  </header>
</template>
