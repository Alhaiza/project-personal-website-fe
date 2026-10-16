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
    Sticky Header:
    - z-50: Memastikan navbar berada di atas seluruh elemen konten halaman.
    - backdrop-blur-md: Efek translucent frosted-glass modern.
  -->
  <header
    class="sticky top-0 z-50 bg-slate-900/85 backdrop-blur-md border-b border-slate-800 transition-all duration-300"
  >
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <!-- Brand Logo -->
      <a href="#" class="text-white font-bold tracking-wider text-lg select-none">
        Alhaiza<span class="text-indigo-400">.</span>
      </a>

      <!--
        Desktop Navigation Menu:
        - 'hidden md:flex': Disembunyikan pada layar sempit (< 768px),
          dan otomatis tampil saat layar >= 768px (Tablet Landscape & Desktop).
      -->
      <div class="hidden md:flex items-center gap-6 text-sm text-slate-300">
        <a href="#about" class="hover:text-indigo-400 transition-colors">About</a>
        <a href="#experience" class="hover:text-indigo-400 transition-colors">Experience</a>
        <a href="#projects" class="hover:text-indigo-400 transition-colors">Projects</a>
        <a href="#skills" class="hover:text-indigo-400 transition-colors">Skills</a>
        <a href="#contact" class="hover:text-indigo-400 transition-colors">Contact</a>
      </div>

      <!--
        Mobile Hamburger Button:
        - 'md:hidden': Hanya muncul pada layar mobile (< 768px).
        - Touch target berukuran 40x40px memenuhi standar ergonomi sentuh layar ponsel.
      -->
      <button
        type="button"
        @click="toggleMenu"
        class="md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition"
        :aria-expanded="isOpen"
        aria-label="Toggle navigation menu"
      >
        <!-- Icon 3 Garis (Hamburger) saat menu tertutup -->
        <svg
          v-if="!isOpen"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <!-- Icon Silang (Close) saat menu terbuka -->
        <svg
          v-else
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!--
      Mobile Navigation Drawer:
      - Muncul vertikal di bawah navbar saat 'isOpen' bernilai true.
      - Tiap link memanggil 'closeMenu' saat di-tap untuk menutup drawer seketika.
    -->
    <div
      v-if="isOpen"
      class="md:hidden border-t border-slate-800/80 bg-slate-900/95 backdrop-blur-xl px-4 py-4 space-y-2 shadow-2xl transition-all"
    >
      <a
        href="#about"
        @click="closeMenu"
        class="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-indigo-300 hover:bg-slate-800/50 transition"
      >About</a>
      <a
        href="#experience"
        @click="closeMenu"
        class="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-indigo-300 hover:bg-slate-800/50 transition"
      >Experience</a>
      <a
        href="#projects"
        @click="closeMenu"
        class="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-indigo-300 hover:bg-slate-800/50 transition"
      >Projects</a>
      <a
        href="#skills"
        @click="closeMenu"
        class="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-indigo-300 hover:bg-slate-800/50 transition"
      >Skills</a>
      <a
        href="#contact"
        @click="closeMenu"
        class="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-indigo-300 hover:bg-slate-800/50 transition"
      >Contact</a>
    </div>
  </header>
</template>
